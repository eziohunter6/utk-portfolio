import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["finalDesigns"]> & {
  index: number;
};

const FinalDesignsSection = async ({
  title,
  content,
  index,
  images,
  darkImages,
}: Props) => {
  const imageData = await Promise.all(
    images?.map((image) => getMediaURL(image)) ?? [],
  );
  const darkImageData = await Promise.all(
    darkImages?.map((image) => getMediaURL(image)) ?? [],
  );

  return (
    <Section id="final-designs">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

      {imageData?.map((img) => {
        if (!img) return null;

        return (
          <div
            key={img.alt}
            className="mt-8 rounded-2xl relative w-full aspect-29/15 dark:hidden"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain object-top-left"
              placeholder={img.base64Preview ? "blur" : "empty"}
              blurDataURL={img.base64Preview}
            />
          </div>
        );
      })}
      {darkImageData?.map((img) => {
        if (!img) return null;

        return (
          <div
            key={img.alt}
            className="mt-8 rounded-2xl relative w-full aspect-29/15 hidden dark:block"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain object-top-left"
              placeholder={img.base64Preview ? "blur" : "empty"}
              blurDataURL={img.base64Preview}
            />
          </div>
        );
      })}
    </Section>
  );
};

export default FinalDesignsSection;
