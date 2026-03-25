import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const Section = ({ className, children, ...props }: Props) => {
  return (
    <section
      className={cn("max-w-7xl m-auto px-6 py-12 md:py-15", className)}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
