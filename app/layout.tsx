import type { Metadata } from 'next';
import { LanguageProvider } from '../hooks/useLanguage';
import './globals.css';

export const metadata: Metadata = {
  title: '书语者 | The Booktalker',
  description: "Converse with the spirit of books. 与书之灵对话。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
