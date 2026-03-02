import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const fonts = Inter({
  variable: "--font-main",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Utkarsh Raj | Senior Product Designer",
  description:
    "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonts.variable} antialiased bg-main font-sans font-medium text-brand px-6 max-w-7xl m-auto scroll-smooth overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
