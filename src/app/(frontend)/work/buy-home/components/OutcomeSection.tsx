import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["outcome"]> & {
  index: number;
};

const OutcomeSection = ({ title, content, index }: Props) => (
  <Section id="outcome">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default OutcomeSection;
