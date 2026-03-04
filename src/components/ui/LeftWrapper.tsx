import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HTMLAttributes<HTMLDivElement>;

const LeftWrapper = ({ className, children, ...props }: Props) => {
  return (
    <div
      className={cn("w-full md:w-3/4 lg:w-3/5 ml-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default LeftWrapper;
