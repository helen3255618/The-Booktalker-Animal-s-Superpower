export type Page = 'language-select' | 'welcome' | 'chat';

export type Language = 'en' | 'fr' | 'zh' | 'de';

export interface Book {
  id: string;
  title: Record<Language, string>;
  author: Record<Language, string>;
  cover: string;
  description: Record<Language, string>;
  prompt: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export interface SkyColor {
  top: string;
  middle1: string;
  middle2: string;
  bottom: string;
}

export interface TimeBasedStyles {
  sky: SkyColor;
  font: {
    color: string;
    shadow: string;
  };
  isNight: boolean;
}
