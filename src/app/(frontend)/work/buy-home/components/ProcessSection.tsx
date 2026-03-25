import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { Embed } from "@/components/ui/Embed";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["process"]> & {
  index: number;
};

const ProcessSection = async ({ title, content, index, iframe }: Props) => {
  return (
    <Section id="process">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

      <Embed url={iframe} className="mt-8 aspect-9/16 md:aspect-29/15" />
    </Section>
  );
};

export default ProcessSection;
