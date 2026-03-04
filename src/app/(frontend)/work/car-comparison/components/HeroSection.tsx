import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["hero"]> & {
  index: number;
};

const HeroSection = ({ title, content, index }: Props) => (
  <Section id="hero">
    <Title as="h1" index={index}>
      {title}
    </Title>

    <LeftWrapper className="pt-8 pb-16">
      <ul className="flex flex-col gap-1 text-base">
        <li>Used Car Comparison</li>
        <li>Lead Designer</li>
        <li>3 Weeks</li>
        <li>Mobile + Web</li>
      </ul>
    </LeftWrapper>

    {/* Bento Grid */}
    <div className="grid lg:max-h-[600px] grid-cols-1 md:grid-cols-[1.8fr_1fr_1.3fr] md:grid-rows-[1fr_1fr] lg:grid-rows-[0.8fr_1fr] gap-4">
      {/* Car Comparison Mockup */}
      <div className="group px-8 pt-8 row-span-2 bg-muted rounded-2xl overflow-hidden">
        <div className="relative w-full h-full aspect-11/16">
          <Image
            src="/images/car-comparison/mockup.webp"
            alt="Car Comparison Mockup"
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Comfort model */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col justify-between gap-4 min-w-0 overflow-hidden">
        <hgroup className="text-ai-gradient text-center text-sm lg:text-base">
          <h4 className="font-semibold">Not just similarities.</h4>
          <p className="text-[0.55em]">
            We understand comparison is just not similarities but differences.
          </p>
        </hgroup>

        <div className="relative -mb-4 overflow-hidden w-full aspect-29/20">
          <Image
            src="/images/car-comparison/comfort.webp"
            alt="Comfort model"
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Quality model */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col justify-between gap-4 min-w-0 overflow-hidden">
        <hgroup className="text-ai-gradient text-center text-sm lg:text-base">
          <h4 className="font-semibold">Read less scan more.</h4>
          <p className="text-[0.55em]">
            Internally trained model that summarises two cars swifty and
            immediately aids to the decision velocity
          </p>
        </hgroup>

        <div className="relative overflow-hidden w-full aspect-21/10">
          <Image
            src="/images/car-comparison/quality.webp"
            alt="Quality model"
            fill
            className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Compare model */}
      <div className="group p-4 md:col-span-2 bg-muted rounded-2xl flex flex-col md:flex-row justify-between items-center md:items-start gap-4 min-w-0 overflow-hidden">
        <div className="relative w-4/5 md:w-2/5 aspect-5/6 -mt-4 shrink-0">
          <Image
            src="/images/car-comparison/compare.webp"
            alt="Compare model"
            fill
            className="object-cover object-bottom group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <hgroup className="text-ai-gradient text-center md:text-right text text-base lg:text-xl mt-auto">
          <h4 className="font-semibold mb-2">No explicit entry.</h4>
          <p className="text-[0.55em]">
            Inbuilt model intelligently understands the discovery pattern and
            smart shortlists car for comparison.
          </p>
        </hgroup>
      </div>
    </div>

    <LeftWrapper className="mt-16">
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default HeroSection;
