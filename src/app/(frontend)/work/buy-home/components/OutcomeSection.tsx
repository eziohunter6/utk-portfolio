import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["outcome"]> & {
  index: number;
};

const OutcomeSection = ({ title, content, index }: Props) => (
  <Section id="outcome">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default OutcomeSection;
