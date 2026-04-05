import { RichText } from "@payloadcms/richtext-lexical/react";
import { getImageProps } from "next/image";
import Section from "@/components/ui/Section";
import WorkedAtSection from "@/components/works/WorkedAtSection";
import type { Home } from "@/payload-types";
import Hands from "./Hands";

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
        <h1 className="text-center text-6xl md:text-8xl lg:text-[10rem]/45 font-semibold pb-4">
          {title}
        </h1>

        <h2 className="text-center text-3xl sm:text-[3.5rem] md:text-[3.5rem] lg:text-[4rem] whitespace-nowrap border-b-2 border-current dark:border-current/20 pb-6">
          {subtitle}
        </h2>

        <h3 className="text-center text-[#707070] px-30 pt-6">
          I help founders, tech companies, and fast-moving teams turn ideas into real products. My hands-on, practical approach builds momentum by keeping teams focused, communication clear, and projects moving forward.
        </h3>
        <Hands />
      </div>


      <WorkedAtSection workedAt={workedAt} darkWorkedAt={darkWorkedAt} />
    </Section>
  );
};

export default HeroSection;
