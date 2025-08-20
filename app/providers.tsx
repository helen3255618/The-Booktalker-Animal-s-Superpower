// app/providers.tsx

'use client';

import { LanguageProvider } from '../hooks/useLanguage';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}