'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Footer from '../components/Footer'; //
import type { Page, Book, Language } from '../types';
import { LanguageProvider, useLanguage } from '../hooks/useLanguage';
import { useTimeStyle } from '../hooks/useTimeStyle'; // Import the new hook
import { PAGE_CAMERA_Z, BOOKS } from '../constants';
import WelcomePage from '../components/WelcomePage';
import ChatPage from '../components/ChatPage';
import ThreeScene from '../components/ThreeScene';
import { BackArrowIcon } from '../components/icons';
import LanguageSelectionPage from '../components/LanguageSelectionPage';

// This wrapper is needed to provide the Language context
// because useLanguage() is used inside HomePage.
export default function AppWrapper() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}

function HomePage() {
  const [page, setPage] = useState<Page>('language-select');
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const { t, setLanguage } = useLanguage();
  const { timeStyles } = useTimeStyle(); // Get time-based styles from our new global provider!

  // All the time-related useState and useEffect logic has been correctly moved out.

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
    // 1. 这是新的“父容器”，一个垂直排列、占满整个屏幕的 Flexbox
    <div className="flex flex-col h-screen w-screen">
      
      {/* 背景盒子保持不变 */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <ThreeScene targetCameraZ={targetCameraZ} timeStyles={timeStyles} />
      </div>

      {/* 2. 这是新的“主内容区”，它会自动伸展 (flex-grow) 填满除页脚外的所有空间 */}
      <div className="relative z-10 flex-grow">
        
        {/* 返回按钮 */}
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
        
        {/* 三个页面 */}
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

      {/* 3. 页脚现在是 Flexbox 布局的最后一个元素，自然地待在底部 */}
      {page === 'welcome' && <Footer />}

    </div>
  );
};