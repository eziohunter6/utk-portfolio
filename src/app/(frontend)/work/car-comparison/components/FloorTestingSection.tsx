import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["floorTesting"]> & {
  index: number;
};

const FloorTestingSection = async ({
  title,
  content,
  image,
  index,
  redirectImage,
}: Props) => {
  const imageData = await getMediaURL(image);
  const redirectLink = await getMediaURL(redirectImage);

  return (
    <Section id="floorTesting">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />

        {redirectLink?.src ? (
          <Link
            href={redirectLink.src}
            target="_blank"
            className="text-brand underline mt-8"
          >
            Variant 2 was selected for experiment rollout.
          </Link>
        ) : (
          <p className="text-brand mt-8">
            Variant 2 was selected for experiment rollout.
          </p>
        )}
      </ContentWrapper>

      {/* Image */}
      {imageData && (
        <div className="rounded-2xl mt-8">
          <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
            <Image
              src={imageData.src}
              alt={imageData.alt}
              fill
              className="object-contain"
              placeholder={imageData.base64Preview ? "blur" : "empty"}
              blurDataURL={imageData.base64Preview}
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default FloorTestingSection;
