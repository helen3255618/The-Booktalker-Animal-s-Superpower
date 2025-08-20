'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import type { Page, Book, TimeBasedStyles, Language } from '../types';
import { useLanguage } from '../hooks/useLanguage';
import { SKY_COLOR_PALETTE, FONT_COLORS, PAGE_CAMERA_Z, BOOKS } from '../constants';
import WelcomePage from '../components/WelcomePage';
import ChatPage from '../components/ChatPage';
import ThreeScene from '../components/ThreeScene';
import { BackArrowIcon } from '../components/icons';
import LanguageSelectionPage from '../components/LanguageSelectionPage';

export default function HomePage() {
  const [page, setPage] = useState<Page>('language-select');
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const { t, setLanguage } = useLanguage();
  const [timeStyles, setTimeStyles] = useState<TimeBasedStyles>({
    sky: SKY_COLOR_PALETTE[new Date().getHours()],
    font: { color: FONT_COLORS[new Date().getHours()], shadow: '' },
    isNight: false,
  });

  useEffect(() => {
    const updateStyling = () => {
      const hour = new Date().getHours();
      const color = FONT_COLORS[hour];
      const isNight = hour >= 19 || hour < 5;
      const shadow = isNight 
        ? "0 0 7px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1)" 
        : "2px 2px 4px rgba(0,0,0,0.4)";

      setTimeStyles({
        sky: SKY_COLOR_PALETTE[hour],
        font: { color, shadow },
        isNight
      });
    };
    
    updateStyling();
    const intervalId = setInterval(updateStyling, 60000);
    return () => clearInterval(intervalId);
  }, []);

  const handleLanguageSelect = useCallback((lang: Language) => {
    setLanguage(lang);
    setPage('welcome');
  }, [setLanguage]);

  const handleStartChat = useCallback(() => {
    setActiveBook(BOOKS[0]);
    setPage('chat');
  }, []);

  const handleGoBack = useCallback(() => {
    if (page === 'chat') {
      setPage('welcome');
      setActiveBook(null);
    } else if (page === 'welcome') {
      setPage('language-select');
    }
  }, [page]);

  const targetCameraZ = useMemo(() => PAGE_CAMERA_Z[page] || 5, [page]);

  const glassBtnStyle: React.CSSProperties = {
    color: timeStyles.font.color,
    textShadow: timeStyles.font.shadow,
  };

  return (
    <main>
      <ThreeScene targetCameraZ={targetCameraZ} timeStyles={timeStyles} />
      <div className="absolute inset-0 z-20">
        {(page === 'welcome' || page === 'chat') && (
          <button 
            onClick={handleGoBack} 
            style={glassBtnStyle}
            className="fixed top-10 left-10 z-50 p-4 text-lg font-inherit border border-white/40 rounded-full bg-white/20 backdrop-blur-sm shadow-lg cursor-pointer transition-all duration-300 hover:bg-white/30"
            aria-label={t('back_button')}
          >
            <BackArrowIcon className="w-6 h-6" />
          </button>
        )}
        
        <div className={`transition-opacity duration-1000 ${page === 'language-select' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <LanguageSelectionPage onSelectLanguage={handleLanguageSelect} fontStyles={timeStyles.font} />
        </div>
        <div className={`transition-opacity duration-1000 ${page === 'welcome' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <WelcomePage onEnter={handleStartChat} fontStyles={timeStyles.font} />
        </div>
        <div className={`transition-opacity duration-1000 ${page === 'chat' && activeBook ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {activeBook && <ChatPage book={activeBook} fontStyles={timeStyles.font} />}
        </div>
      </div>
    </main>
  );
};
