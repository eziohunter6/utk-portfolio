import type React from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<"hgroup"> & {
  hideUnderLine?: boolean;
  index?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  isModal?: boolean;
};

const Title = ({
  children,
  index,
  className,
  hideUnderLine,
  as: Tag = "h2",
  isModal,
  ...props
}: Props) => {
  return (
    <hgroup
      className={cn(
        "flex items-end justify-between pb-6 mb-12 -mx-px sticky top-20 md:top-22 z-10 bg-main",
        !hideUnderLine && "border-b-2 border-current dark:border-current/10",
        isModal && "justify-start gap-4",
        className,
      )}
      {...props}
    >
      {!!index && (
        <p
          className={cn(
            "md:w-0 font-semibold text-sm sm:text-base md:text-lg",
            isModal && "md:w-auto",
          )}
        >
          {index.toString().padStart(2, "0")}.
        </p>
      )}
      <Tag
        className={cn(
          "w-full md:w-[71%] lg:w-2/3 ml-auto text-right md:text-left text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
          isModal && "text-left ml-0 md:w-full lg:w-full",
        )}
      >
        {children}
      </Tag>
    </hgroup>
  );
};

export default Title;
