import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const ContentWrapper = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
};

export default ContentWrapper;
