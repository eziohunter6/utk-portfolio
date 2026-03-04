import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["floorTesting"]> & {
  index: number;
};

const FloorTestingSection = ({ title, content, image, index }: Props) => {
  const imageData = getMediaURL(image);

  return (
    <Section id="floorTesting">
      <Title index={index}>{title}</Title>

      <LeftWrapper>
        <RichText data={content} className="prose" />
      </LeftWrapper>

      {/* Image */}
      {imageData && (
        <div className="rounded-2xl mt-8">
          <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
            <Image
              src={imageData.src}
              alt={imageData.alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default FloorTestingSection;
