import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["finalDesigns"]> & {
  index: number;
};

// TODO: Add iframe

const FinalDesignsSection = ({ title, content, index }: Props) => (
  <Section id="finalDesigns">
    <Title index={index}>{title}</Title>

    <LeftWrapper className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftWrapper>

    {/* Image */}
    <div className="bg-muted rounded-2xl mt-8">
      <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
        <Image
          src="/images/car-comparison/final-designs.png"
          alt="Final Designs Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </Section>
);

export default FinalDesignsSection;
