import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["exploration"]> & {
  index: number;
};

const ExplorationTradeoffsSection = async ({
  title,
  content,
  index,
  image,
  darkImage,
}: Props) => {
  const imageData = await getMediaURL(image);
  const darkImageData = await getMediaURL(darkImage);

  return (
    <Section id="exploration">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

      {/* Image */}
      {imageData && (
        <div className="relative w-full aspect-29/15 rounded-2xl overflow-hidden mt-8">
          <Image
            src={imageData.src}
            alt={imageData.alt}
            fill
            className="object-contain dark:hidden"
            placeholder={imageData.base64Preview ? "blur" : "empty"}
            blurDataURL={imageData.base64Preview}
          />
          <Image
            src={darkImageData?.src ?? imageData?.src}
            alt={darkImageData?.alt ?? imageData?.alt}
            fill
            className="object-contain hidden dark:block"
            placeholder={darkImageData?.base64Preview ? "blur" : "empty"}
            blurDataURL={
              darkImageData?.base64Preview ?? imageData?.base64Preview
            }
          />
        </div>
      )}
    </Section>
  );
};

export default ExplorationTradeoffsSection;
