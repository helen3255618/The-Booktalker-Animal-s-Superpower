// app/layout.tsx

import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react'; // ✅ 1. 在这里添加这一行导入

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
        <Providers>
          {children}
        </Providers>
        <Analytics /> {/* ✅ 2. 在 </body> 标签之前添加这一行 */}
      </body>
    </html>
  );
}