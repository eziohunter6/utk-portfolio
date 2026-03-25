import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import ContentWrapper from "@/components/ui/ContentWrapper";
import { Embed } from "@/components/ui/Embed";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["process"]> & {
  index: number;
};

const ProcessSection = async ({
  title,
  content,
  index,
  iframe,
  image,
}: Props) => {
  const img = await getMediaURL(image);

  return (
    <Section id="process">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {/* Image */}
        <div className="relative aspect-9/16 rounded-2xl overflow-hidden">
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

        {/* Iframe */}
        <Embed url={iframe} className="col-span-2 aspect-9/16 md:aspect-auto" />
      </div>
    </Section>
  );
};

export default ProcessSection;
