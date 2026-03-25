import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["hypothesis"]> & {
  index: number;
};

const HypothesisSection = ({ title, content, index }: Props) => (
  <Section id="hypothesis">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default HypothesisSection;
