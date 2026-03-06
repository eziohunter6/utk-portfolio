import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import { Embed } from "@/components/ui/Embed";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { getBase64 } from "@/lib/getBase64";
import type { BuyHome } from "@/payload-types";

type Props = NonNullable<BuyHome["process"]> & {
  index: number;
};

const ProcessSection = async ({ title, content, index, iframe }: Props) => {
  const imgBase64 = await getBase64("/images/buy-home/returning-user.webp");

  return (
    <Section id="process">
      <Title index={index}>{title}</Title>

      <LeftWrapper>
        <RichText data={content} className="prose" />
      </LeftWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {/* Image */}
        <div className="relative aspect-9/16 rounded-2xl overflow-hidden">
          <Image
            src="/images/buy-home/returning-user.webp"
            alt="Process Image"
            fill
            className="object-cover object-top"
            placeholder={imgBase64 ? "blur" : "empty"}
            blurDataURL={imgBase64}
          />
        </div>

        {/* Iframe */}
        <Embed url={iframe} className="col-span-2 aspect-9/16 md:aspect-auto" />
      </div>
    </Section>
  );
};

export default ProcessSection;
