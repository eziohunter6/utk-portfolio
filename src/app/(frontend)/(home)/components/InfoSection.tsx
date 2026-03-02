import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { Home } from "@/payload-types";

type Props = NonNullable<Home["info"]>;

const InfoSection = ({ leftContent, rightContent, image }: Props) => {
  const imageData = getMediaURL(image);

  return (
    <StickySection id="info">
      <Title index={2}>Info</Title>

      <div className="w-full md:w-3/4 lg:w-3/5 flex flex-col gap-8 ml-auto">
        {/* Info Content */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Content 1 */}
          <div className="flex flex-col gap-4">
            <RichText data={leftContent} className="prose" />
          </div>

          {/* Content 2 */}
          <div className="flex flex-col gap-4">
            <RichText data={rightContent} className="prose" />
          </div>
        </div>

        {/* Info Image */}
        {imageData && (
          <div className="relative w-full aspect-square bg-muted">
            <Image
              fill
              src={imageData.src}
              alt={imageData.alt}
              className="object-cover"
            />
          </div>
        )}
      </div>
    </StickySection>
  );
};

export default InfoSection;
