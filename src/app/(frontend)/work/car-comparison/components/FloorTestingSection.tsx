import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["floorTesting"]> & {
  index: number;
};

// TODO: Add iframe

const FloorTestingSection = ({ title, content, index }: Props) => (
  <StickySection id="floorTesting">
    <Title index={index}>{title}</Title>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>

    {/* Image */}
    <div className="bg-muted flex flex-col md:flex-row gap-10 rounded-2xl p-4 mt-8">
      <div className="relative w-full aspect-13/10 rounded-lg overflow-hidden">
        <Image
          src="/images/car-comparison/user-testing.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
      <div className="relative w-3/4 aspect-49/50 rounded-lg overflow-hidden mt-16">
        <Image
          src="/images/car-comparison/variants.png"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>
    </div>
  </StickySection>
);

export default FloorTestingSection;
