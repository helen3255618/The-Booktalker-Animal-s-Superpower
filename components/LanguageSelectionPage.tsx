'use client';

import React from 'react';
import type { Language } from '../types';

interface LanguageSelectionPageProps {
  onSelectLanguage: (lang: Language) => void;
  fontStyles: { color: string; shadow: string };
}

const LANGUAGES: { code: Language; name: string }[] = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'zh', name: '中文' },
  { code: 'de', name: 'Deutsch' },
];

const LanguageSelectionPage: React.FC<LanguageSelectionPageProps> = ({ onSelectLanguage, fontStyles }) => {
  const textStyle: React.CSSProperties = {
    color: fontStyles.color,
    textShadow: fontStyles.shadow,
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 p-5">
      <div className="grid grid-cols-2 gap-6">
        {LANGUAGES.map(lang => (
          <button
            key={lang.code}
            onClick={() => onSelectLanguage(lang.code)}
            style={textStyle}
            className="w-48 h-24 flex items-center justify-center text-xl font-semibold border border-white/40 rounded-[42%_58%_70%_30%_/_45%_45%_55%_55%] bg-white/20 backdrop-blur-sm shadow-lg cursor-pointer transition-all duration-300 hover:translate-y-[-2px] hover:bg-white/30"
          >
            {lang.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelectionPage;
