import Image from "next/image";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { cn, getMediaURL } from "@/lib/utils";
import type { EcTime } from "@/payload-types";

type Props = NonNullable<EcTime["hero"]> & {
  index: number;
  isModal?: boolean;
};

const HeroSection = async ({ title, tags, images, index, isModal }: Props) => {
  const imageData = await Promise.all(
    images?.map((image) => getMediaURL(image)) ?? [],
  );

  return (
    <Section id="hero" className={cn(isModal && "md:py-6")}>
      <Title as="h1" index={index} isModal={isModal}>
        {title}
      </Title>

      {tags && (
        <div className="flex flex-row gap-4 mb-8 -mt-4">
          {tags.map((tag) => (
            <span
              key={tag.keyword}
              className="text-xs px-2.5 py-1.5 bg-tag-bg rounded-full"
            >
              {tag.keyword}
            </span>
          ))}
        </div>
      )}

      {imageData?.map((img) => {
        if (!img) return null;

        return (
          <div
            key={img.alt}
            className="mt-8 rounded-2xl relative w-full aspect-29/15 overflow-hidden"
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
