import Image from "next/image";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { ClearTrip } from "@/payload-types";

type Props = NonNullable<ClearTrip["hero"]> & {
  index: number;
};

const HeroSection = async ({ title, tags, images, index }: Props) => {
  const imageData = await Promise.all(
    images?.map((image) => getMediaURL(image)) ?? [],
  );

  return (
    <Section id="hero">
      {tags && (
        <div className="flex flex-row items-center gap-2 mt-6 mb-3">
          <div className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.keyword}
                className="text-xs px-2.5 py-1.5 bg-tag-bg rounded-full"
              >
                {tag.keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      <Title as="h1" index={index}>
        {title}
      </Title>

      {imageData?.map((img) => {
        if (!img) return null;

        return (
          <div
            key={img.alt}
            className="mt-8 rounded-2xl relative w-full aspect-29/15"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover object-top-left"
              placeholder={img.base64Preview ? "blur" : "empty"}
              blurDataURL={img.base64Preview}
            />
          </div>
        );
      })}
    </Section>
  );
};

export default HeroSection;
