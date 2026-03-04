import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["hero"]> & {
  index: number;
};

const HeroSection = ({ title, content, index }: Props) => (
  <Section id="hero">
    <Title as="h1" className="mb-8" index={index}>
      {title}
    </Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default HeroSection;
