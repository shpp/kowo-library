import React from 'react';
import type { Metadata } from 'next';
import { Inter, Podkova } from 'next/font/google';

import './globals.css';

import { Providers } from '@/app/providers';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

import styles from './layout.module.css';
import Script from 'next/script';

const podkova = Podkova({
  variable: '--font-podkova',
  subsets: ['latin'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Бібліотека KOWO',
  description: '',
  icons: '/favicon.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${podkova.variable}`}>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ZPMNNVBR8S`}
        />
        <Script
          strategy="afterInteractive"
          id="gtag-init-page-specific"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZPMNNVBR8S', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Providers>
          <div className={styles.layout}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const runtime = 'edge';
