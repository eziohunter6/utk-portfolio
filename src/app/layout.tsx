import { Inter } from "next/font/google";
import "@/app/globals.css";

const fonts = Inter({
  variable: "--font-main",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fonts.variable} antialiased font-sans scroll-smooth`}>
        {children}
      </body>
    </html>
  );
}
