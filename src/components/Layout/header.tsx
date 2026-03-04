import Link from "next/link";
import { getNavlinks } from "@/lib/services";
import CollapsibleNav from "./CollapsibleNav";

const Header = async () => {
  const links = await getNavlinks();

  return (
    <header className="fixed top-0 inset-x-0 z-20 py-5 md:py-6 bg-main">
      <div className="px-6 max-w-7xl m-auto flex items-center justify-between">
        {/* Home */}
        <Link href="/" className="w-0 text-4xl relative">
          utk.
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Main navigation"
          className="hidden md:flex grow justify-center items-center gap-10"
        >
          {links.map(({ href, title, id }) => (
            <Link key={id ?? href} href={href} className="text-base">
              {title}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <CollapsibleNav links={links} />
      </div>
    </header>
  );
};

export default Header;
