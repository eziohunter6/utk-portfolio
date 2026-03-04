import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { Embed } from "@/components/ui/Embed";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["problem"]> & {
  index: number;
};

const ProblemSection = ({ title, content, iframe, index }: Props) => (
  <Section id="problem">
    <Title index={index}>{title}</Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {/* Image */}
      <div className="relative aspect-9/16 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/returning-user.webp"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Iframe */}
      <Embed url={iframe} className="col-span-2 aspect-9/16 md:aspect-auto" />
    </div>
  </Section>
);

export default ProblemSection;
