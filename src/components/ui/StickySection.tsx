import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const StickySection = ({ className, children, ...props }: Props) => {
  return (
    <section className={cn("", className)} {...props}>
      {children}
    </section>
  );
};

export default StickySection;
