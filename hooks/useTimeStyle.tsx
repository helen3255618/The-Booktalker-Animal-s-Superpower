// hooks/useTimeStyle.tsx

'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { TimeBasedStyles } from '../types';
import { SKY_COLOR_PALETTE, FONT_COLORS } from '../constants';

// 创建一个默认的样式值
const defaultTimeStyles: TimeBasedStyles = {
  sky: SKY_COLOR_PALETTE[12],
  font: { color: FONT_COLORS[12], shadow: "2px 2px 4px rgba(0,0,0,0.4)" },
  isNight: false,
};

// 创建我们的 Context
const TimeStyleContext = createContext<{ timeStyles: TimeBasedStyles }>({ timeStyles: defaultTimeStyles });

// 创建 Provider 组件，这是“广播站”本身
export const TimeStyleProvider = ({ children }: { children: ReactNode }) => {
  const [timeStyles, setTimeStyles] = useState<TimeBasedStyles>(defaultTimeStyles);

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

  return (
    <TimeStyleContext.Provider value={{ timeStyles }}>
      {children}
    </TimeStyleContext.Provider>
  );
};

// 创建自定义 Hook，这是组件用来“收听广播”的工具
export const useTimeStyle = () => useContext(TimeStyleContext);