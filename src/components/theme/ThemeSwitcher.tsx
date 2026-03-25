"use client";

import { Loader2, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function ThemeSwitcher() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = useMemo(() => theme === "dark", [theme]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleToggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const IconToRender = useCallback(() => {
    if (!isMounted) {
      return <Loader2 className="size-4 text-brand animate-spin" aria-hidden />;
    }

    if (isDark) {
      return <Sun className="size-4 text-brand" aria-hidden />;
    }

    return <Moon className="size-4 text-brand" aria-hidden />;
  }, [isDark, isMounted]);

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={handleToggle}
      className="inline-flex items-center justify-center rounded-full bg-tag-bg border border-current/10 p-2"
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="size-4">
        <IconToRender />
      </span>
    </button>
  );
}
