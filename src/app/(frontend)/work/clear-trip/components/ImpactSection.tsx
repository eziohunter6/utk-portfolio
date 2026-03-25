import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { ClearTrip } from "@/payload-types";

type Props = NonNullable<ClearTrip["impact"]> & {
  index: number;
  isModal?: boolean;
};

const ImpactSection = ({
  title,
  content,
  index,
  redirectLink,
  isModal,
}: Props) => (
  <Section id="impact">
    <Title index={index} isModal={isModal}>
      {title}
    </Title>

    <ContentWrapper>
      <RichText data={content} className="prose" />
    </ContentWrapper>

    {redirectLink && (
      <Link
        href={redirectLink}
        target="_blank"
        className="inline-block px-8 py-4 mt-6 bg-brand text-main rounded-lg"
      >
        Read full case study
      </Link>
    )}
  </Section>
);

export default ImpactSection;
