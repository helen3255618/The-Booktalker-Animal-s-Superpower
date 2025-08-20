import { GoogleGenAI } from '@google/genai';
import type { Content } from '@google/genai';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { history, message, systemInstruction } = await req.json();

    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return new Response("API_KEY environment variable not set", { status: 500, statusText: "API Key not found" });
    }
    const ai = new GoogleGenAI({ apiKey });

    const contents: Content[] = [
      ...(history || []),
      { role: 'user', parts: [{ text: message }] }
    ];

    const stream = await ai.models.generateContentStream({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          const text = chunk.text;
          if (text) {
            controller.enqueue(new TextEncoder().encode(text));
          }
        }
        controller.close();
      },
    });

    return new Response(readableStream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });

  } catch (error) {
    console.error("Error in chat API:", error);
    const statusText = error instanceof Error ? error.message : 'Unknown error';
    return new Response(`Error processing request: ${statusText}`, { status: 500, statusText });
  }
}