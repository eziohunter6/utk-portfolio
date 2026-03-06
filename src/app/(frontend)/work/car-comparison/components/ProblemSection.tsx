import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["problem"]> & {
  index: number;
};

const ProblemSection = async ({
  title,
  content,
  video,
  index,
  image,
}: Props) => {
  const vid = await getMediaURL(video);
  const img = await getMediaURL(image);

  return (
    <Section id="problem">
      <Title index={index}>{title}</Title>

      <LeftWrapper className="flex flex-col gap-8">
        <RichText data={content} className="prose" />
      </LeftWrapper>

      <div className="flex flex-col md:flex-row gap-8 mt-8">
        {/* Image */}
        <div className="w-full md:w-1/2 relative aspect-9/16 md:aspect-auto rounded-2xl overflow-hidden">
          {img && (
            <Image
              src={img?.src}
              alt={img?.alt}
              fill
              className="object-cover object-top"
              placeholder={img?.base64Preview ? "blur" : "empty"}
              blurDataURL={img?.base64Preview}
            />
          )}
        </div>

        {/* Video */}
        {vid && (
          <div
            key={vid.alt}
            className="w-full md:w-1/2 group relative aspect-9/16 md:aspect-auto rounded-2xl overflow-hidden border border-black/10"
          >
            <video
              src={vid.src}
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
              controls={false}
              playsInline
              autoPlay
              muted
              loop
              poster={vid.thumbnail?.src}
            />
          </div>
        )}
      </div>
    </Section>
  );
};

export default ProblemSection;
