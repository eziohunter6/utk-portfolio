import { RichText } from "@payloadcms/richtext-lexical/react";
import LeftSection from "@/components/ui/LeftSection";
import StickySection from "@/components/ui/StickySection";
import Title from "@/components/ui/Title";
import type { CarComparison } from "@/payload-types";

type Props = NonNullable<CarComparison["reflections"]> & {
  index: number;
};

const ReflectionsSection = ({ title, content, index }: Props) => (
  <StickySection id="reflections">
    <Title index={index}>{title}</Title>

    <LeftSection className="flex flex-col gap-8">
      <RichText data={content} className="prose" />
    </LeftSection>
  </StickySection>
);

export default ReflectionsSection;
