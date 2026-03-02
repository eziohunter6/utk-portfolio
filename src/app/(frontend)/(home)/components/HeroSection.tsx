import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import StickySection from "@/components/ui/StickySection";
import { filterPopulated } from "@/lib/utils";
import type { Home } from "@/payload-types";
import HandSvg from "./HandSvg";

type Props = NonNullable<Home["hero"]>;

const HeroSection = ({ title, subtitle, content, workedAt }: Props) => (
  <StickySection id="hero">
    <div className="flex flex-col justify-center gap-8 mb-16">
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]/45 font-semibold">
        {title}
      </h1>

      <h2 className="text-3xl sm:text-[3rem]/15 md:text-6xl lg:text-[5rem]/24 text-right whitespace-nowrap py-8 border-y-2 border-current">
        {subtitle}
      </h2>
    </div>

    <div className="flex flex-col gap-2 w-full md:w-3/4 lg:w-3/5 my-16">
      <HandSvg className="size-16 md:size-24" />

      <RichText data={content} className="prose" />
    </div>

    {/* Worked At */}
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-brand text-white/35 py-4">
      <h3 className="text-[0.6rem] sm:text-xs font-semibold text-center">
        WORKED AT
      </h3>

      <div className="flex flex-row justify-center py-4">
        {filterPopulated(workedAt).map(({ alt, url, filename }) => {
          if (!url) return null;

          return (
            <div key={filename} className="flex flex-row items-center group">
              <Image
                src={url}
                alt={alt ?? filename ?? ""}
                height={32}
                width={100}
                className="object-contain h-4 sm:h-8 w-auto"
              />

              <span className="mx-2 sm:mx-4 h-2/3 w-[1.5px] rounded-full bg-[#778BFF] group-last:hidden" />
            </div>
          );
        })}
      </div>
    </div>
  </StickySection>
);

export default HeroSection;
