"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import Section from "@/components/ui/Section";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

const ErrorPage = ({ error, reset }: ErrorPageProps): ReactElement => (
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

    <div className="flex flex-wrap items-center gap-6 mt-8">
      <button
        onClick={reset}
        className="underline underline-offset-4 hover:opacity-80 transition-opacity"
        aria-label="Retry loading the page"
        type="button"
      >
        Try again
      </button>

      <Link
        href="/"
        className="underline underline-offset-4 hover:opacity-80 transition-opacity"
        aria-label="Go back to home page"
      >
        Back to home
      </Link>
    </div>
  </Section>
);

export default ErrorPage;
