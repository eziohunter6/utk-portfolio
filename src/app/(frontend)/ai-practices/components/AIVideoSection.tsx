import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiVideo"]> & {
  index: number;
};

const AIVideoSection = ({ title, content, videos, image, index }: Props) => {
  const img = getMediaURL(image);

  return (
    <StickySection id="ai-video">
      <Title index={index}>{title}</Title>
      <LeftSection className="flex flex-col gap-8">
        <RichText data={content} className="prose" />
      </LeftSection>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {videos?.map((video) => {
          const vid = getMediaURL(video);

          if (!vid) return null;

          return (
            <div
              key={vid.alt}
              className="relative w-full aspect-video bg-muted"
            >
              <video
                src={vid.src}
                className="w-full h-full object-contain"
                playsInline
                controls
                preload="none"
                muted
                loop
              />
            </div>
          );
        })}
      </div>

      {/* Image */}
      {img && (
        <div className="bg-muted rounded-2xl px-8 pt-8 mt-8">
          <div className="relative w-11/12 aspect-11/5 rounded-lg overflow-hidden mx-auto">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-contain object-bottom"
            />
          </div>
        </div>
      )}
    </StickySection>
  );
};

export default AIVideoSection;
