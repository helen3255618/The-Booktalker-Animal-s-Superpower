// components/Modal.tsx

'use client';

import React, { ReactNode } from 'react';

// 定义 Modal 组件接收的参数类型
interface ModalProps {
  isOpen: boolean;        // 控制 Modal 是否打开
  onClose: () => void;      // 关闭 Modal 时要调用的函数
  title: string;          // Modal 的标题
  children: ReactNode;    // Modal 内部要显示的内容
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // 如果 isOpen 是 false，则不渲染任何东西
  if (!isOpen) {
    return null;
  }

  return (
    // -- 最外层的容器，用作半透明背景 --
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center"
      onClick={onClose} // 点击背景时关闭 Modal
    >
      {/* -- Modal 主体内容，阻止事件冒泡以防点击内容时关闭 -- */}
      <div 
        className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 m-4 max-w-lg w-full text-gray-800 animate-fade-in-down"
        onClick={(e) => e.stopPropagation()} // 阻止点击 Modal 内容时关闭它
      >
        {/* -- Modal 头部 -- */}
        <div className="flex justify-between items-center border-b border-black/20 pb-3 mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button 
            onClick={onClose}
            className="text-2xl font-light hover:text-red-500 transition-colors"
            aria-label="Close modal"
          >
            &times; {/* 这是一个 "X" 关闭符号 */}
          </button>
        </div>

        {/* -- Modal 内容区域 -- */}
        <div className="prose prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
