'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/providers/ThemeProvider';

import toast, { Toaster } from 'react-hot-toast';
import { useUserStore } from '@/store/userStore';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          disableTransitionOnChange
          attribute="class"
          defaultTheme="light"
          enableSystem
        >
          <Toaster
            position="top-center"
            toastOptions={{
              style: {
                background: '#333',
                color: '#fff',
              },
            }}
          />

          <div className="">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
