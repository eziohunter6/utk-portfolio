import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["hero"]> & {
  index: number;
};

const HeroSection = ({ title, content, index }: Props) => (
  <StickySection id="hero">
    <Title as="h1" className="mb-8" index={index}>
      {title}
    </Title>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>
  </StickySection>
);

export default HeroSection;
