import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["hero"]> & {
  index: number;
};

const HeroSection = ({ title, content, index }: Props) => (
  <Section id="hero">
    <Title as="h1" index={index}>
      {title}
    </Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default HeroSection;
