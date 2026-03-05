"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import Section from "@/components/ui/Section";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ reset }: ErrorPageProps): ReactElement => {
  return (
    <main className="font-medium bg-main text-brand overflow-x-hidden">
      <header className="fixed top-0 inset-x-0 z-20 py-5 md:py-6 bg-main">
        <div className="px-6 max-w-7xl m-auto flex items-center justify-between">
          <Link
            href="/"
            className="w-0 text-4xl relative"
            aria-label="Go to home page"
          >
            utk.
          </Link>
        </div>
      </header>

      <Section
        id="error"
        className="flex flex-col justify-center gap-8 min-h-[calc(100dvh-70px)]"
      >
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-semibold">
          Something went wrong
        </h1>

        <h2 className="text-3xl sm:text-[3rem]/15 md:text-6xl text-right whitespace-nowrap py-8 border-y-2 border-current">
          Unexpected error occurred
        </h2>

        <button
          onClick={reset}
          className="text-center underline underline-offset-4 hover:opacity-80 transition-opacity w-fit"
          aria-label="Retry loading the page"
        >
          Try again
        </button>
      </Section>
    </main>
  );
};

export default ErrorPage;
