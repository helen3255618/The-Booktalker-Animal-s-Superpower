'use client';

import React, { useState } from 'react'; // 重新导入 useState
import { useLanguage } from '../hooks/useLanguage';
import { useTimeStyle } from '../hooks/useTimeStyle';
import Modal from './Modal'; // 重新导入 Modal 组件

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { timeStyles } = useTimeStyle();
  const contactEmail = 'animalsuperpowers.app@gmail.com';
  
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); 

  return (
    // 使用 <> Fragment 来包裹 footer 和 Modal 两个组件
    <>
      <footer 
        style={{ 
          color: timeStyles.font.color,
          textShadow: timeStyles.font.shadow 
        }}
        className="text-center p-4 text-xs"
      >
        <div className="flex justify-center items-center space-x-4">
          <span>© 2025 The Booktalker</span>
          
          <button 
            onClick={() => setIsStoryOpen(true)}
            className="bg-transparent border-none p-0 cursor-pointer hover:text-white transition-colors"
          >
            {t('footer_our_story')}
          </button>
          
          <button 
            onClick={() => setIsGuideOpen(true)}
            className="bg-transparent border-none p-0 cursor-pointer hover:text-white transition-colors"
          >
            {t('footer_guide')}
          </button>
          
          <button
            onClick={() => setIsContactOpen(true)} 
            className="bg-transparent border-none p-0 cursor-pointer hover:text-white transition-colors"
          >
            {t('footer_contact')}
          </button>
        </div>
      </footer>

      <Modal 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)} 
        title={t('guide_title')}
      >
        <p className="mb-2">{t('guide_p1')}</p>
        <p className="mb-4">{t('guide_p2')}</p>
        
        <h4 className="font-bold mt-4">{t('guide_how_to')}</h4>
        <p>{t('guide_how_to_p1')}</p>
        <p>{t('guide_how_to_p2')}</p>
        
        <h4 className="font-bold mt-4">{t('guide_inspiration')}</h4>
        <p>{t('guide_inspiration_p1')}</p>
        <ul className="list-disc list-outside text-sm mt-2 space-y-1 pl-4">
            <li>{t('guide_ex1')}</li>
            <li>{t('guide_ex2')}</li>
            <li>{t('guide_ex3')}</li>
            <li>{t('guide_ex4')}</li>
            <li>{t('guide_ex5')}</li>
        </ul>
        
        <p className="mt-4">{t('guide_outro1')}</p>
        <p className="mt-2"><strong>{t('guide_outro2')}</strong></p>
      </Modal>

      <Modal 
        isOpen={isStoryOpen} 
        onClose={() => setIsStoryOpen(false)} 
        title={t('story_title')}
      >
        <p className="mb-4">{t('story_p1')}</p>
        <p className="mb-4">{t('story_p2')}</p>
        <p className="mb-4">{t('story_p3')}</p>
        <p className="mb-4">{t('story_p4')}</p>
        <p><strong>{t('story_p5')}</strong></p>
      </Modal>

      <Modal
      isOpen={isContactOpen}
      onClose={() => setIsContactOpen(false)} 
      title={t('footer_contact')}
      >
      <p>{t('contact_modal_p1')}</p>
      <p className="font-bold text-lg text-center my-4 select-all">{contactEmail}</p>
      <p>{t('contact_modal_p2')}</p>
      </Modal> 
    </>
  );
};

export default Footer;