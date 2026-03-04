import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiContent"]> & {
  index: number;
};

const AIContentSection = ({ title, content, images, index }: Props) => (
  <StickySection id="ai-content">
    <Title index={index}>{title}</Title>
    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>

    {/* Image */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
      {images?.map((image) => {
        const img = getMediaURL(image);

        if (!img) return null;

        return (
          <div key={img.alt} className="relative w-full aspect-4/3 bg-muted">
            <Image src={img.src} alt={img.alt} fill className="object-cover" />
          </div>
        );
      })}
    </div>
  </StickySection>
);

export default AIContentSection;
