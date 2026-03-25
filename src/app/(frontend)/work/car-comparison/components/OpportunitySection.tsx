import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { Embed } from "@/components/ui/Embed";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["opportunity"]> & {
  index: number;
};

const OpportunitySection = ({ title, content, iframe, index }: Props) => (
  <Section id="opportunity">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>

    {/* Iframe */}
    <Embed url={iframe} className="mt-8 aspect-9/16 md:aspect-29/15" />
  </Section>
);

export default OpportunitySection;
