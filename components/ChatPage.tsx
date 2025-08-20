'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import type { Book, ChatMessage } from '../types';
import { SendIcon } from './icons';
import { marked, type TokenizerExtension } from 'marked';
import DOMPurify from 'dompurify';

const emphasisTokenizer: TokenizerExtension = {
  name: 'emphasis',
  level: 'inline',
  start(src: string) {
    return src.match(/[*_]/)?.index;
  },
  tokenizer(src: string): any {
    let match = /^\*\*([\s\S]+?)\*\*/.exec(src);
    if (match) {
      return { type: 'strong', raw: match[0], text: match[1], tokens: this.lexer.inlineTokens(match[1]), };
    }
    match = /^__([\s\S]+?)__/.exec(src);
    if (match) {
      return { type: 'strong', raw: match[0], text: match[1], tokens: this.lexer.inlineTokens(match[1]), };
    }
    match = /^\*([\s\S]+?)\*/.exec(src);
    if (match) {
      return { type: 'em', raw: match[0], text: match[1], tokens: this.lexer.inlineTokens(match[1]), };
    }
    match = /^_([\s\S]+?)_/.exec(src);
    if (match) {
      return { type: 'em', raw: match[0], text: match[1], tokens: this.lexer.inlineTokens(match[1]), };
    }
  },
};

marked.use({
  gfm: true,
  breaks: true,
  extensions: [emphasisTokenizer],
});

const renderMessageContent = (text: string) => {
  const rawHtml = marked.parse(text) as string;
  const withLogicalBreaks = rawHtml.replace(/(?:<br\s*\/?>\s*){2,}/g, '</p><p>&nbsp;</p><p>');
  return { __html: DOMPurify.sanitize(withLogicalBreaks) };
};

const TypingIndicator: React.FC = () => (
  <div className="self-start p-3">
    <div className="typing-indicator">
      <span className="h-2 w-2 bg-gray-500 rounded-full inline-block"></span>
      <span className="h-2 w-2 bg-gray-500 rounded-full inline-block"></span>
      <span className="h-2 w-2 bg-gray-500 rounded-full inline-block"></span>
    </div>
  </div>
);

const ChatPage: React.FC<{ book: Book; fontStyles: { color: string; shadow: string } }> = ({ book, fontStyles }) => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const processStream = async (response: Response) => {
    if (!response.body) {
        throw new Error("Response body is null");
    }
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let currentResponseText = "";
    
    setMessages(prev => [...prev, { role: 'model', text: "" }]);

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        currentResponseText += decoder.decode(value);
        setMessages(prev => {
            const updatedMessages = [...prev];
            updatedMessages[updatedMessages.length - 1] = { role: 'model', text: currentResponseText + " ▌" };
            return updatedMessages;
        });
    }
    
    setMessages(prev => {
        const finalMessages = [...prev];
        finalMessages[finalMessages.length - 1] = { role: 'model', text: currentResponseText };
        return finalMessages;
    });
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  useEffect(() => {
    const initializeChat = async () => {
      if (!book) return;
      setIsLoading(true);
      setMessages([]);

      try {
        const initialUserPromptText = t('initial_chat_message');
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                history: [],
                message: initialUserPromptText,
                systemInstruction: book.prompt,
            }),
        });
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const userMessage: ChatMessage = { role: 'user', text: initialUserPromptText };
        // We don't display the initial prompt, so we just await the model's response
        await processStream(response);

      } catch (error) {
        console.error("Failed to initialize chat:", error);
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
        const displayError = `**Oops! I couldn't start our conversation.**\n\nHere's the technical detail:\n\`\`\`\n${errorMessage}\n\`\`\`\n\nPlease check the server logs or network tab for more info.`;
        setMessages([{ role: 'model', text: displayError }]);
      } finally {
        setIsLoading(false);
      }
    };
    initializeChat();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [book, t]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    const messageToSend = input;
    setInput('');
    setIsLoading(true);

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                history: newMessages.slice(0, -1).map(msg => ({
                    role: msg.role,
                    parts: [{ text: msg.text }]
                })),
                message: messageToSend,
                systemInstruction: book.prompt,
            }),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }
        
        await processStream(response);

    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred.';
      setMessages(prev => [...prev, {
        role: 'model',
        text: `**I hit a snag responding.**\n\nHere's the technical detail:\n\`\`\`\n${errorMessage}\n\`\`\`\n\nPlease try asking again.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const glassBtnStyle: React.CSSProperties = {
    color: fontStyles.color,
    textShadow: fontStyles.shadow,
  };

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-2 sm:p-5">
      <div className="w-full max-w-3xl h-[90%] max-h-[90vh] flex flex-col bg-white/20 backdrop-blur-xl shadow-2xl rounded-2xl">
        <div className="flex-grow overflow-y-auto p-4 sm:p-8 flex flex-col space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 px-5 rounded-2xl max-w-[85%] sm:max-w-[80%] leading-relaxed animate-pop-in
                ${msg.role === 'user'
                  ? 'bg-blue-200/90 self-end rounded-br-lg text-gray-800'
                  : 'bg-white/80 self-start rounded-bl-lg text-gray-800'
                }`}
            >
              <div
                className="prose prose-sm max-w-none prose-p:my-2"
                dangerouslySetInnerHTML={renderMessageContent(msg.text)}
              />
            </div>
          ))}
          {isLoading && messages.length > 0 && messages[messages.length - 1].role === 'user' && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="flex items-center p-4 sm:p-8 border-t border-white/20">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('chat_placeholder')}
            autoComplete="off"
            disabled={isLoading}
            className="flex-grow border-none p-4 rounded-full bg-white/70 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            style={glassBtnStyle}
            className="ml-4 p-4 text-lg font-inherit border border-white/40 rounded-full bg-white/20 backdrop-blur-sm shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SendIcon className="w-6 h-6"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
