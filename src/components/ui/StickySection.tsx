import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const StickySection = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

export default StickySection;
