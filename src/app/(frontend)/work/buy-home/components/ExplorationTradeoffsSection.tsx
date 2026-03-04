import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["exploration"]> & {
  index: number;
};

const ExplorationTradeoffsSection = ({
  title,
  content,
  index,
  image,
}: Props) => {
  const imageData = getMediaURL(image);

  return (
    <Section id="exploration">
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

export default ExplorationTradeoffsSection;
