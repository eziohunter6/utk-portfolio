import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { cn, getMediaURL } from "@/lib/utils";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["finalDesigns"]> & {
  index: number;
};

const FinalDesignsSection = async ({
  title,
  content,
  index,
  images,
}: Props) => {
  const imageData = await Promise.all(
    images?.map((image) => getMediaURL(image)) ?? [],
  );

  return (
    <Section id="final-designs">
      <Title index={index}>{title}</Title>

      <LeftWrapper>
        <RichText data={content} className="prose prose-p:w-3/4" />
      </LeftWrapper>

      {imageData?.map((img, index) => {
        if (!img) return null;

        return (
          <div key={img.alt} className="rounded-2xl mt-8">
            <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={cn(
                  "object-contain object-top-left",
                  index === 0 && "object-cover",
                )}
                placeholder={img.base64Preview ? "blur" : "empty"}
                blurDataURL={img.base64Preview}
              />
            </div>
          </div>
        );
      })}
    </Section>
  );
};

export default FinalDesignsSection;
