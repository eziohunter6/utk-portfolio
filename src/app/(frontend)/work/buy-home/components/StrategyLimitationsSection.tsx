import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["strategy"]> & {
  index: number;
};

// TODO: Add iframe

const StrategyLimitationsSection = ({ title, content, index }: Props) => (
  <Section id="strategy">
    <Title index={index}>{title}</Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>

    {/* Image */}
    <div className="bg-muted flex flex-col md:flex-row gap-4 rounded-2xl p-4 mt-8">
      <div className="relative w-full aspect-6/7 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/strategy-1.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="relative w-full aspect-7/4 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/strategy-2.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </Section>
);

export default StrategyLimitationsSection;
