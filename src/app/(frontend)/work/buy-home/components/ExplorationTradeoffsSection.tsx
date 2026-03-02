import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import { getMediaURL } from "@/lib/utils";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["exploration"]> & {
  index: number;
};

const ExplorationTradeoffsSection = ({
  title,
  content,
  index,
  image,
}: Props) => {
  const imageData = getMediaURL(image);

  return (
    <StickySection id="exploration">
      <Title index={index}>{title}</Title>

      <LeftSection className="flex flex-col gap-8">
        <RichText data={content} className="prose" />
      </LeftSection>

      {/* Image */}
      <div className="bg-muted rounded-2xl mt-8">
        <div className="relative w-full aspect-29/15 rounded-lg overflow-hidden">
          <Image
            src={imageData?.src ?? ""}
            alt={imageData?.alt ?? ""}
            fill
            className="object-contain object-top"
          />
        </div>
      </div>
    </StickySection>
  );
};

export default ExplorationTradeoffsSection;
