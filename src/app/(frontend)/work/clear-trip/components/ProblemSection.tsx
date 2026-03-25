import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { ClearTrip } from "@/payload-types";

type Props = NonNullable<ClearTrip["problem"]> & {
  index: number;
  isModal?: boolean;
};

const ProblemSection = ({ title, content, index, isModal }: Props) => (
  <Section id="problem">
    <Title index={index} isModal={isModal}>
      {title}
    </Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default ProblemSection;
