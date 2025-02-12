import type { Metadata } from "next";
import { Inter, Podkova } from "next/font/google";
import "./globals.css";

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
        <header>

        </header>
        <main>
        {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}

export const runtime = 'edge';
