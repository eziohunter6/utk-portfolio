"use client";

import ReactLenis, { LenisRef } from "lenis/react";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

type DrawerProps = {
  open: boolean;
  onClose: () => void;
  onCloseComplete?: () => void;
  children: React.ReactNode;
};

const DRAWER_ANIMATION_DURATION = 300;

export default function Drawer({
  open,
  onClose,
  onCloseComplete,
  children,
}: DrawerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const unmountTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open) {
      // Cancel any pending unmount from a previous close
      if (unmountTimer.current) {
        clearTimeout(unmountTimer.current);
        unmountTimer.current = null;
      }

      // Mount the drawer
      setIsMounted(true);

      // Open the drawer
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsOpen(true));
      });

      // Hide the body overflow
      document.documentElement.classList.add("overflow-hidden");
    } else {
      // Close the drawer
      setIsOpen(false);

      // Show the body overflow
      document.documentElement.classList.remove("overflow-hidden");

      // Unmount the drawer after transition completes
      unmountTimer.current = setTimeout(() => {
        setIsMounted(false);
        unmountTimer.current = null;
        if (onCloseComplete) {
          onCloseComplete();
        }
      }, DRAWER_ANIMATION_DURATION);
    }
  }, [open]);

  // Cleanup timer on component unmount and body overflow
  useEffect(() => {
    return () => {
      if (unmountTimer.current) {
        clearTimeout(unmountTimer.current);
      }
      document.documentElement.classList.remove("overflow-hidden");
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-neutral-700/75 backdrop-blur-xs transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      {/* Panel */}
      <ReactLenis
        options={{ overscroll: false }}
        className={cn(
          // Base styles
          "fixed bg-main shadow-2xl overscroll-none overflow-x-hidden @container",

          // Transition styles
          "transition-transform duration-300 ease-in-out",

          // Mobile: bottom sheet — slides up/down
          "bottom-0 left-0 right-0 rounded-t-2xl max-h-[75dvh]",

          // Desktop: right side panel — slides in from right
          "md:top-0 md:left-0 md:right-auto md:h-full md:max-h-dvh md:w-2/3 md:rounded-none",

          // Translation styles
          isOpen
            ? "translate-y-0 md:translate-x-0"
            : "translate-y-full md:translate-y-0 md:-translate-x-full",
        )}
      >
        <header className="sticky top-0 z-20 bg-main py-3 md:py-4">
          <button type="button" onClick={onClose} className="p-4">
            <X className="size-6" aria-hidden />
          </button>
        </header>
        {children}
      </ReactLenis>
    </div>,
    document.body,
  );
}
