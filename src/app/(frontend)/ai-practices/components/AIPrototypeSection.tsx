import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiPrototyping"]> & {
  index: number;
};

const AIPrototypeSection = async ({ title, content, images, index }: Props) => {
  const imageData = await Promise.all(
    images?.map((image) => getMediaURL(image)) ?? [],
  );

  return (
    <Section id="ai-prototyping">
      <Title index={index}>{title}</Title>

      <LeftWrapper>
        <RichText data={content} className="prose" />
      </LeftWrapper>

      {/* Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {imageData?.map((img) => {
          if (!img) return null;

          return (
            <div key={img.alt} className="relative w-full aspect-4/3 bg-muted">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                placeholder={img.base64Preview ? "blur" : "empty"}
                blurDataURL={img.base64Preview}
              />
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AIPrototypeSection;
