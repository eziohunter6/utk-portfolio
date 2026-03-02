import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["hero"]> & {
  index: number;
};

const HeroSection = ({ title, content, index }: Props) => (
  <StickySection id="hero">
    <Title as="h1" className="mb-8" index={index}>
      {title}
    </Title>

    {/* Bento Grid */}
    <div className="mt-8 grid lg:max-h-[600px] grid-cols-1 md:grid-cols-[1.8fr_1fr_1.3fr] md:grid-rows-[1fr_1fr] lg:grid-rows-[0.8fr_1fr] gap-4">
      {/* Buy Homepage Mockup */}
      <div className="group px-8 pt-8 row-span-2 bg-muted rounded-2xl overflow-hidden">
        <div className="relative w-full h-full aspect-2/3">
          <Image
            src="/images/buy-home/mockup.png"
            alt="Buy Homepage Mockup"
            fill
            className="object-cover object-top group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* KAM V1 */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col-reverse md:flex-col justify-between items-center md:items-start gap-4 min-w-0 overflow-hidden">
        <div className="relative overflow-hidden w-full aspect-29/20">
          <Image
            src="/images/buy-home/kam-v1.png"
            alt="KAM V1"
            fill
            className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <hgroup className="text-center text-sm lg:text-base">
          <h4 className="font-semibold">Trust by Transparency.</h4>
          <p className="text-[0.55em]">
            Know everything about who is calling you
          </p>
        </hgroup>
      </div>

      {/* KAM V2 */}
      <div className="group p-4 bg-muted rounded-2xl flex flex-col justify-between gap-4 min-w-0 overflow-hidden">
        <hgroup className="text-center text-sm lg:text-base">
          <h4 className="font-semibold">Alerts so it doesn’t feel spam.</h4>
          <p className="text-[0.55em]">
            Every call now has a context and it becomes informational
          </p>
        </hgroup>

        <div className="relative overflow-hidden w-full aspect-21/10">
          <Image
            src="/images/buy-home/kam-v2.png"
            alt="KAM V2"
            fill
            className="object-contain group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </div>

      {/* Activity Card */}
      <div className="group p-4 md:col-span-2 bg-muted rounded-2xl flex flex-col-reverse md:flex-row justify-between items-center md:items-start gap-4 min-w-0 overflow-hidden">
        <div className="relative w-4/5 md:w-2/5 aspect-5/6 -mb-4 shrink-0">
          <Image
            src="/images/buy-home/activity-card.png"
            alt="Activity Card"
            fill
            className="object-contain object-bottom-left group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>

        <hgroup className="text-center md:text-right text-base lg:text-xl mt-auto">
          <h4 className="font-semibold mb-2">State adaptive components.</h4>

          <ul className="text-[0.55em] flex flex-row justify-end flex-wrap gap-2">
            <li className="bg-[#E8E8E8] rounded-full px-2 py-1">Informative</li>
            <li className="bg-[#E8E8E8] rounded-full px-2 py-1">
              128+ Use cases
            </li>
            <li className="bg-[#E8E8E8] rounded-full px-2 py-1">
              Modular Action
            </li>
            <li className="bg-[#E8E8E8] rounded-full px-2 py-1">
              Configurable
            </li>
          </ul>
        </hgroup>
      </div>
    </div>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>
  </StickySection>
);

export default HeroSection;
