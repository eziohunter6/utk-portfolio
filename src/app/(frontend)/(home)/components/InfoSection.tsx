import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getBase64 } from "@/lib/getBase64";
import { getMediaURL } from "@/lib/utils";
import type { Home } from "@/payload-types";

type Props = NonNullable<Home["info"]>;

const InfoSection = async ({ leftContent, rightContent, image }: Props) => {
  const imageData = await getMediaURL(image);

  return (
    <Section id="info">
      <Title index={2}>Info</Title>

      <LeftWrapper className="flex flex-col gap-8">
        {/* Info Content */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-4">
          {/* Content 1 */}
          <RichText data={leftContent} className="prose  prose-h4:text-4xl" />

          {/* Content 2 */}
          <RichText data={rightContent} className="prose prose-h4:text-4xl" />
        </div>

        {/* Info Image */}
        {imageData && (
          <div className="relative w-full aspect-3/2">
            <Image
              fill
              src={imageData.src}
              alt={imageData.alt}
              className="object-contain"
              placeholder={imageData.base64Preview ? "blur" : "empty"}
              blurDataURL={imageData.base64Preview}
            />
          </div>
        )}
      </LeftWrapper>
    </Section>
  );
};

export default InfoSection;
