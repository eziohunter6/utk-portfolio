import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftWrapper from "@/components/ui/LeftWrapper";
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

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>
  </Section>
);

export default ChallengeSection;
