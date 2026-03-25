import { RichText } from "@payloadcms/richtext-lexical/react";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { EcTime } from "@/payload-types";

type Props = NonNullable<EcTime["challenge"]> & {
  index: number;
  isModal?: boolean;
};

const ChallengeSection = ({ title, content, index, isModal }: Props) => (
  <Section id="challenge">
    <Title index={index} isModal={isModal}>
      {title}
    </Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>
  </Section>
);

export default ChallengeSection;
