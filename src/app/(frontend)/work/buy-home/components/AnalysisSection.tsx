import { RichText } from "@payloadcms/richtext-lexical/react";
import { Embed } from "@/components/ui/Embed";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["analysis"]> & {
  index: number;
};

const AnalysisSection = ({ title, content, iframe, index }: Props) => (
  <Section id="analysis">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>

    <Embed url={iframe} className="mt-8 aspect-29/15" />
  </Section>
);

export default AnalysisSection;
