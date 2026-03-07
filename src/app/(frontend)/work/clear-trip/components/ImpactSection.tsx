import { RichText } from "@payloadcms/richtext-lexical/react";
import Link from "next/link";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { ClearTrip } from "@/payload-types";

type Props = NonNullable<ClearTrip["impact"]> & {
  index: number;
};

const ImpactSection = ({ title, content, index, redirectLink }: Props) => (
  <Section id="impact">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>

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
