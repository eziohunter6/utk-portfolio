import { RichText } from "@payloadcms/richtext-lexical/react";
import { getImageProps } from "next/image";
import Section from "@/components/ui/Section";
import WorkedAtSection from "@/components/works/WorkedAtSection";
import type { Home } from "@/payload-types";

type Props = NonNullable<Home["hero"]>;

const HeroSection = ({
  title,
  subtitle,
  content,
  workedAt,
  darkWorkedAt,
}: Props) => {
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
      <div className="flex flex-col justify-center pt-30 md:pt-20">
        <h1 className="text-6xl md:text-8xl lg:text-[10rem]/45 font-semibold border-b-2 border-current pb-4 mb-4">
          {title}
        </h1>

        <h2 className="text-3xl sm:text-[3.5rem] md:text-[3.5rem] lg:text-[4rem] text-right whitespace-nowrap">
          {subtitle}
        </h2>

        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen md:-mt-[12.5%] md:-mb-[20%] my-8">
          <picture>
            <source media="(max-width: 640px)" srcSet={mobile} />
            <img {...rest} srcSet={desktop} className="object-cover m-auto" />
          </picture>
        </div>
      </div>

      <div className="w-full md:w-3/4 lg:w-3/5 mb-16">
        <RichText data={content} className="prose" />
      </div>

      <WorkedAtSection workedAt={workedAt} darkWorkedAt={darkWorkedAt} />
    </Section>
  );
};

export default HeroSection;
