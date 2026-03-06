import Link from "next/link";
import Section from "@/components/ui/Section";

const NotFound = () => {
  return (
    <Section
      id="not-found"
      className="flex flex-col justify-center gap-8 min-h-[calc(100dvh-70px)]"
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]/45 font-semibold">
        404
      </h1>

      <h2 className="text-3xl sm:text-[3rem]/15 md:text-6xl lg:text-[5rem]/24 text-right whitespace-nowrap py-8 border-y-2 border-current">
        Page not found
      </h2>

      <Link
        href="/"
        className="underline underline-offset-4 hover:opacity-80 transition-opacity mt-8 w-fit"
        aria-label="Go back to home page"
      >
        Back to home
      </Link>
    </Section>
  );
};

export default NotFound;
