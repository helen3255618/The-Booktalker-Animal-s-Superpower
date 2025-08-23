'use client';

import React, { useState } from 'react'; // 重新导入 useState
import { useLanguage } from '../hooks/useLanguage';
import { useTimeStyle } from '../hooks/useTimeStyle';
import Modal from './Modal'; // 重新导入 Modal 组件

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { timeStyles } = useTimeStyle();
  const contactEmail = 'animalsuperpowers.app@gmail.com';
  
  // 重新添加状态，用来控制“使用手册”弹出框的显示和隐藏
  const [isGuideOpen, setIsGuideOpen] = useState(false);

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
          
          {/* ✅ 这里是核心修改：把 <span> 换成了 <button> */}
          <button 
            onClick={() => setIsGuideOpen(true)}
            // 下面的 className 是为了让 button 看起来不像按钮，更像普通文字
            className="bg-transparent border-none p-0 cursor-pointer hover:text-white transition-colors"
          >
            {t('footer_guide')}
          </button>
          
          <a 
            href={`mailto:${contactEmail}`} 
            className="hover:text-white transition-colors"
          >
            {t('footer_contact')}
          </a>
        </div>
      </footer>

      {/* 重新添加 Modal 组件，并连接到 isGuideOpen 状态 */}
      <Modal 
        isOpen={isGuideOpen} 
        onClose={() => setIsGuideOpen(false)} 
        title={t('footer_guide')}
      >
        <h4>欢迎来到探险！</h4>
        <p><strong>第一步：选择你的探险伙伴</strong></p>
        <p>点击屏幕上的动物卡片，对应的“书之灵”就会出现并和你打招呼！</p>
        <br/>
        <p><strong>第二步：与书之灵对话</strong></p>
        <p>你可以直接提问，或者点击AI下方出现的建议按钮，继续深入探索它的秘密！</p>
      </Modal>
    </>
  );
};

export default Footer;