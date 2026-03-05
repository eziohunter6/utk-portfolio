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
    document.body.style.overflow = "auto";
  };

  const handleToggle = () =>
    setIsOpen((prev) => {
      if (prev) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }

      return !prev;
    });

  const overlayContent = (
    <div
      id="mobile-nav-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className={cn(
        "md:hidden fixed inset-x-0 top-20 bottom-0 z-20 bg-brand text-white shadow-xs transition-opacity duration-300 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <nav
        aria-label="Mobile navigation"
        className="h-2/4 flex flex-col gap-8 p-10 px-6 justify-between"
      >
        {links.map(({ href, title, id }) => (
          <Link
            key={id ?? href}
            href={href}
            onClick={handleClose}
            className="text-4xl font-light py-4 border-b-2 border-current"
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
