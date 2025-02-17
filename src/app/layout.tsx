import React from "react";
import type {Metadata} from "next";
import { Inter, Podkova } from "next/font/google";

import "@radix-ui/themes/styles.css";

import "./globals.css";

import {Providers} from "@/app/providers";
import {Header} from "@/widgets/header";
import {Footer} from "@/widgets/footer";

import styles from "./layout.module.css";

const podkova = Podkova({
  variable: "--font-podkova",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Бібліотека KOWO",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${podkova.variable}`}>
        <Providers>
          <div className={styles.layout}>
            <Header/>
            <main className={styles.main}>
              {children}
            </main>
            <Footer/>
          </div>
        </Providers>
      </body>
    </html>
  );
}
