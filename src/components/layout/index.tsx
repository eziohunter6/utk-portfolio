import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="font-medium bg-main text-brand overflow-clip">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
