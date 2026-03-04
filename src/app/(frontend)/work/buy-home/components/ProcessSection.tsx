import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { Embed } from "@/components/ui/Embed";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["process"]> & {
  index: number;
};

const ProcessSection = ({ title, content, index, iframe }: Props) => (
  <Section id="process">
    <Title index={index}>{title}</Title>

    <LeftWrapper>
      <RichText data={content} className="prose" />
    </LeftWrapper>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {/* Image */}
      <div className="relative aspect-9/16 rounded-lg overflow-hidden">
        <Image
          src="/images/buy-home/returning-user.webp"
          alt="Process Image"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Iframe */}
      <Embed url={iframe} className="col-span-2 aspect-9/16 md:aspect-29/15" />
    </div>
  </Section>
);

export default ProcessSection;
