'use client';

import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface WelcomePageProps {
  onEnter: () => void;
  fontStyles: { color: string; shadow: string; };
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onEnter, fontStyles }) => {
  const { t } = useLanguage();

  const textStyle: React.CSSProperties = {
    color: fontStyles.color,
    textShadow: fontStyles.shadow,
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 p-5">
      <div className="text-center p-12 md:p-16 min-w-[300px] md:min-w-[500px] bg-white/15 backdrop-blur-xl shadow-2xl border border-white/20 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] transition-all duration-500 hover:bg-white/20 hover:shadow-cyan-500/10">
        <h1 style={textStyle} className="text-5xl md:text-6xl font-medium transition-all duration-1000 pointer-events-none">
          {t('title')}
        </h1>
        <p style={textStyle} className="text-lg md:text-xl mt-3 min-h-[1.2em] transition-all duration-1000 pointer-events-none">
          {t('subtitle')}
        </p>
        <button
          onClick={onEnter}
          style={textStyle}
          className="mt-8 px-8 py-4 text-lg font-inherit border border-white/40 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-white/20 backdrop-blur-sm shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:bg-white/30"
        >
          {t('enter_button')}
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
