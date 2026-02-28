import Link from "next/link";
import { NAVLINKS } from "@/constants/navlinks";

const Header = () => (
  <header className="fixed top-0 inset-x-0 z-50 py-6 bg-background/50 backdrop-blur-sm border-b border-current/10">
    <div className="px-6 max-w-7xl m-auto flex items-center justify-between">
      {/* Home */}
      <Link href="/" className="w-0 text-4xl relative">
        utk.
      </Link>

      {/* Nav Links */}
      <nav className="grow flex justify-center items-center gap-10">
        {NAVLINKS.map(({ href: link, title }) => (
          <Link key={title} href={link} className="text-base">
            {title}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
