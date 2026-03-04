import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["finalDesigns"]> & {
  index: number;
};

const FinalDesignsSection = ({ title, content, index, images }: Props) => (
  <Section id="finalDesigns">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>

    {images?.map((image) => {
      const img = getMediaURL(image);

      if (!img) return null;

      return (
        <div key={img.alt} className="rounded-2xl mt-8">
          <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain object-top-left"
            />
          </div>
        </div>
      );
    })}
  </Section>
);

export default FinalDesignsSection;
