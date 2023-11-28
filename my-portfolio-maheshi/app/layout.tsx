"use client";

import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const selectedLayoutSegment = useSelectedLayoutSegment();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedLayoutSegment]);

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
