import type { Metadata } from "next";
import { Lexend, Noto_Sans } from "next/font/google";
import "./globals.css";

const lexendSans = Lexend({
  variable: "--font-display",
  subsets: ["latin"],
});

const notoSans = Noto_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Redação em Português CACD | Prof. Fernando Entratice",
  description: "Fernando Entratice - Redação CACD - Aulas personalizadas para a prova escrita de Língua Portuguesa do Concurso de Admissão à Carreira Diplomática.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${notoSans.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
