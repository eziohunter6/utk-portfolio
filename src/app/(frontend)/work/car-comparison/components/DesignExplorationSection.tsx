import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["exploration"]> & {
  index: number;
};

// TODO: Add iframe

const DesignExplorationSection = ({ title, content, index }: Props) => (
  <Section id="exploration">
    <Title index={index}>{title}</Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default DesignExplorationSection;
