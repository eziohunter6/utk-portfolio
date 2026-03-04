import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["analysis"]> & {
  index: number;
};

// TODO: Add iframe

const AnalysisSection = ({ title, content, index }: Props) => (
  <Section id="analysis">
    <Title index={index}>{title}</Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>

    {/* Image */}
    <div className="bg-muted rounded-2xl px-8 pt-8 mt-8">
      <div className="relative w-11/12 aspect-video rounded-lg overflow-hidden mx-auto">
        <Image
          src="/images/buy-home/analysis.png"
          alt="Analysis Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </Section>
);

export default AnalysisSection;
