"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { filterPopulated } from "@/lib/utils";
import type { Home } from "@/payload-types";

type Props = {
  workedAt: NonNullable<Home["hero"]>["workedAt"];
  darkWorkedAt: NonNullable<Home["hero"]>["darkWorkedAt"];
};

const WorkedAtSection = ({ workedAt, darkWorkedAt }: Props) => {
  const { theme } = useTheme();
  const workedAtItems = filterPopulated(workedAt);
  const darkWorkedAtItems = filterPopulated(darkWorkedAt);
  const renderedItems = theme === "dark" ? darkWorkedAtItems : workedAtItems;

  if (!renderedItems.length) {
    return null;
  }

  const renderWorkedAtItem = (
    { alt, url, filename }: (typeof renderedItems)[number],
    index: number,
  ) => {
    if (!url) {
      return null;
    }

    return (
      <div
        key={`${filename}-${index}`}
        className="group flex flex-row items-center shrink-0"
      >
        <Image
          src={url}
          alt={alt ?? filename ?? ""}
          height={32}
          width={100}
          className="h-8 w-auto object-contain shrink-0"
        />

        <span className="shrink-0 mx-2 h-2/3 min-h-6 w-[1.5px] rounded-full bg-[#EDF0FF] group-last:hidden sm:mx-4" />
      </div>
    );
  };

  return (
    <div className="border-b-2 border-current">
      <h3 className="text-center text-sm font-semibold">WORKED AT</h3>

      <div className="relative py-4 md:hidden overflow-hidden left-1/2 right-1/2 -mx-[50vw] w-screen">
        <div className="flex flex-row items-center animate-marquee">
          {[...renderedItems, ...renderedItems].map(renderWorkedAtItem)}
        </div>
      </div>

      <div className="hidden flex-row justify-center py-4 md:flex">
        {renderedItems.map(renderWorkedAtItem)}
      </div>
    </div>
  );
};

export default WorkedAtSection;
