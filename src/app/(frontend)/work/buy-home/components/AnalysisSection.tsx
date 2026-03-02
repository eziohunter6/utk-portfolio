import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["analysis"]> & {
  index: number;
};

// TODO: Add iframe

const AnalysisSection = ({ title, content, index }: Props) => (
  <StickySection id="analysis">
    <Title index={index}>{title}</Title>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>

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
  </StickySection>
);

export default AnalysisSection;
