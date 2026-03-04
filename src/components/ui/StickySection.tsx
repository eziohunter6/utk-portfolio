import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const StickySection = ({ className, children, ...props }: Props) => {
  return (
    <section
      className={cn(
        "sticky top-0 max-w-7xl m-auto bg-white px-6 py-15",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default StickySection;
