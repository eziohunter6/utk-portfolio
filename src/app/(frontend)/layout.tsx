import type { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Utkarsh Raj | Senior Product Designer",
  description:
    "Senior product design partner to founders and tech companies. Turning ideas into real products with hands-on, practical approach.",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Layout>{children}</Layout>;
}
