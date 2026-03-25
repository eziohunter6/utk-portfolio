import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/components/ui/ContentWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { cn, getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiVideo"]> & {
  index: number;
};

const AIVideoSection = async ({ title, content, videos, index }: Props) => {
  const videoData = await Promise.all(
    videos?.map((video) => getMediaURL(video)) ?? [],
  );

  return (
    <Section id="ai-video">
      <Title index={index}>{title}</Title>
      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

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
    </Section>
  );
};

export default AIVideoSection;
