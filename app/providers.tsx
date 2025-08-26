// app/providers.tsx

'use client';

import { LanguageProvider } from '../hooks/useLanguage';
import { TimeStyleProvider } from '../hooks/useTimeStyle'; // ✅ 导入新的 Provider
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <TimeStyleProvider> {/* ✅ 把它包在最外层 */}
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </TimeStyleProvider>
  );
}