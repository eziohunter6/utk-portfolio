import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { Embed } from "@/components/ui/Embed";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["strategy"]> & {
  index: number;
};

const StrategyLimitationsSection = ({
  title,
  content,
  index,
  iframe,
}: Props) => (
  <Section id="strategy">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>

    <Embed url={iframe} className="mt-8 aspect-9/16 md:aspect-29/15" />
  </Section>
);

export default StrategyLimitationsSection;
