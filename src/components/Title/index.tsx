import type React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"hgroup"> & {
  hideUnderLine?: boolean;
  index: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Title = ({
  children,
  index,
  className,
  hideUnderLine,
  as: Tag = "h2",
  ...props
}: Props) => {
  return (
    <hgroup
      className={cn(
        "relative flex items-end justify-between mt-30 mb-15",
        !hideUnderLine && "pb-6 border-b-2 border-primary",
        className,
      )}
      {...props}
    >
      <p className="w-0 font-semibold text-sm sm:text-base md:text-lg">
        {index.toString().padStart(2, "0")}.
      </p>
      <Tag className="grow text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
        {children}
      </Tag>
    </hgroup>
  );
};

export default Title;
