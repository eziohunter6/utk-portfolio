import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import SmoothScroll from "@/components/LenisProvider";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const fonts = Inter({ variable: "--font-main", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Senior Product Designer",
    template: "%s | Utkarsh Raj",
    absolute: "Utkarsh Raj - Senior Product Designer",
  },
  description:
    "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
  openGraph: {
    title: {
      default: "Senior Product Designer",
      template: "%s | Utkarsh Raj",
      absolute: "Utkarsh Raj - Senior Product Designer",
    },
    description:
      "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
  },
  twitter: {
    title: {
      default: "Senior Product Designer",
      template: "%s | Utkarsh Raj",
      absolute: "Utkarsh Raj - Senior Product Designer",
    },
    description:
      "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
  },
  alternates: {
    canonical: new URL(process.env.BASE_URL ?? ""),
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL(process.env.BASE_URL ?? ""),
};

export default function FrontendLayout({
  children,
  modal = null,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fonts.variable}>
      <body className="antialiased font-sans scroll-smooth font-medium bg-main text-brand overflow-clip">
        <SmoothScroll>
          <Header />
          {children}
          {modal}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
