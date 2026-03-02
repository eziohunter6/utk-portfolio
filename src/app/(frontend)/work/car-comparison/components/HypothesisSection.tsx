import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["hypothesis"]> & {
  index: number;
};

const HypothesisSection = ({ title, content, index }: Props) => (
  <StickySection id="hypothesis">
    <Title index={index}>{title}</Title>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>
  </StickySection>
);

export default HypothesisSection;
