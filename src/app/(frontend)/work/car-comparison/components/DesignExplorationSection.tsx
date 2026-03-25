import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { Embed } from "@/components/ui/Embed";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["exploration"]> & {
  index: number;
};

const DesignExplorationSection = ({ title, content, iframe, index }: Props) => (
  <Section id="exploration">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>

    <Embed url={iframe} className="mt-8 aspect-9/16 md:aspect-29/15" />
  </Section>
);

export default DesignExplorationSection;
