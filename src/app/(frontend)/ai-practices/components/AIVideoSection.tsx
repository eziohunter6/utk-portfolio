import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { cn, getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiVideo"]> & {
  index: number;
};

const AIVideoSection = async ({
  title,
  content,
  videos,
  image,
  index,
}: Props) => {
  const img = await getMediaURL(image);
  const videoData = await Promise.all(
    videos?.map((video) => getMediaURL(video)) ?? [],
  );

  return (
    <Section id="ai-video">
      <Title index={index}>{title}</Title>
      <LeftWrapper>
        <RichText data={content} className="prose" />
      </LeftWrapper>

      {/* Videos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 items-center">
        {videoData?.map((vid, index) => {
          if (!vid) return null;

          return (
            <div
              key={vid.alt}
              className={cn(
                "group relative w-full h-full bg-muted rounded-2xl overflow-hidden border border-black/10",
                index === 1 && "col-span-2",
              )}
            >
              <video
                src={vid.src}
                className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                playsInline
                controls
                muted
                loop
                autoPlay
                poster={vid.thumbnail?.src}
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
    </Section>
  );
};

export default AIVideoSection;
