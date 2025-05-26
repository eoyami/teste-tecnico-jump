import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Loja da Jump",
  description: "Isso é uma descrição da loja da Jump"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-h-[100vh] bg-secondary`}
      >
        <div className="container flex flex-col items-center justify-center mx-auto px-2 md:p-0">
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
