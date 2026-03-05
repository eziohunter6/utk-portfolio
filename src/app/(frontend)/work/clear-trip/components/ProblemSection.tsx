import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["outcome"]> & {
  index: number;
};

const ProblemSection = ({ title, content, index }: Props) => (
  <Section id="problem">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default ProblemSection;
