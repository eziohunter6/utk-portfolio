import { RichText } from "@payloadcms/richtext-lexical/react";
import Image, { getImageProps } from "next/image";
import Section from "@/components/ui/Section";
import { filterPopulated } from "@/lib/utils";
import type { Home } from "@/payload-types";

type Props = NonNullable<Home["hero"]>;

const HeroSection = ({ title, subtitle, content, workedAt }: Props) => {
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    alt: "Hero",
    src: "/images/home/hero-mobile.webp",
    sizes: "100vw",
    preload: true,
    height: 600,
    width: 800,
  });

  const {
    props: { srcSet: desktop, ...rest },
  } = getImageProps({
    alt: "Hero",
    src: "/images/home/hero-desktop.webp",
    sizes: "100vw",
    preload: true,
    height: 1080,
    width: 1920,
  });

  return (
    <Section id="hero">
      <div className="flex flex-col justify-center gap-8 mb-16 pt-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]/45 font-semibold border-b-2 border-current pb-4">
          {title}
        </h1>

        <h2 className="text-3xl sm:text-[3.5rem] md:text-[3.5rem] lg:text-[4rem] text-right whitespace-nowrap">
          {subtitle}
        </h2>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen -mt-[10%] md:-mt-[15%] -mb-[20%] md:-mb-[25%]">
          <picture>
            <source media="(max-width: 640px)" srcSet={mobile} />
            <img {...rest} srcSet={desktop} className="object-cover" />
          </picture>
        </div>
      </div>

      <div className="w-full md:w-3/4 lg:w-3/5 my-16">
        <RichText data={content} className="prose" />
      </div>

      {/* Worked At */}
      <h3 className="text-sm font-semibold text-center">WORKED AT</h3>

      {/* TODO: add marqure text here */}
      <div className="flex flex-row justify-center py-4 border-b-2 border-current">
        {filterPopulated(workedAt).map(({ alt, url, filename }) => {
          if (!url) return null;

          return (
            <div key={filename} className="flex flex-row items-center group">
              <Image
                src={url}
                alt={alt ?? filename ?? ""}
                height={32}
                width={100}
                className="object-contain h-8 w-auto"
              />

              <span className="shrink-0 mx-2 sm:mx-4 h-2/3 w-[1.5px] rounded-full bg-[#EDF0FF] group-last:hidden" />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HeroSection;
