"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { TNavLink } from "@/lib/types";
import { cn } from "@/lib/utils";

const CollapsibleNav = ({ links }: { links: TNavLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleClose = () => {
    setIsOpen(false);
    document.documentElement.classList.remove("overflow-hidden");
  };

  const handleToggle = () =>
    setIsOpen((prev) => {
      document.documentElement.classList.toggle("overflow-hidden", !prev);
      return !prev;
    });

  const overlayContent = (
    <div
      id="mobile-nav-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={cn(
        "md:hidden fixed inset-x-0 top-20 bottom-0 z-20 bg-brand text-main dark:text-brand dark:bg-main shadow-xs transition-opacity duration-300 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <nav
        aria-label="Mobile navigation"
        className="h-2/4 flex flex-col gap-4 p-10 px-6 justify-between text-4xl font-light"
      >
        {links.map(({ href, title, id }) => (
          <Link
            key={id ?? href}
            href={href}
            onClick={handleClose}
            className="py-4 border-b-2 border-current"
          >
            {title}
          </Link>
        ))}
      </nav>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        tabIndex={0}
        className="md:hidden"
      >
        {isOpen ? (
          <X className="size-6" aria-hidden />
        ) : (
          <Menu className="size-6" aria-hidden />
        )}
      </button>

      {/* Portal to body so backdrop-blur works (escapes fixed header stacking context) */}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(overlayContent, document.body)}
    </>
  );
};

export default CollapsibleNav;
