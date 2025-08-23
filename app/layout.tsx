// app/layout.tsx

import './globals.css';
import { Providers } from './providers';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

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
          {/* ✅ 现在，children 和 Footer 都在 Providers 的包裹之内了 */}
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}