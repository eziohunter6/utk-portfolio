import Link from "next/link";
import type { Navlink } from "@/payload-types";

type HeaderProps = {
  navLinks?: Navlink["navLinks"];
};

const Header = ({ navLinks }: HeaderProps) => {
  const links = (navLinks ?? []).map((link) => ({
    title: link.title,
    href: link.href,
  }));

  return (
    <header className="fixed top-0 inset-x-0 z-50 py-6 bg-background/50 backdrop-blur-sm border-b border-current/10">
      <div className="px-6 max-w-7xl m-auto flex items-center justify-between">
        {/* Home */}
        <Link href="/" className="w-0 text-4xl relative">
          utk.
        </Link>

        {/* Nav Links */}
        <nav
          aria-label="Main navigation"
          className="grow flex justify-center items-center gap-10"
        >
          {links.map(({ href, title }) => (
            <Link key={title} href={href} className="text-base">
              {title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
