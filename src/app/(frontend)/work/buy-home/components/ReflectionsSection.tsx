import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["reflections"]> & {
  index: number;
};

const ReflectionsSection = ({ title, content, index }: Props) => (
  <Section id="reflections">
    <Title index={index}>{title}</Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default ReflectionsSection;
