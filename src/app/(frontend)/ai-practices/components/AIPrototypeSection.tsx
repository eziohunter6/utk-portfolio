import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";
import LeftWrapper from "@/components/ui/LeftWrapper";
import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import { cn, getMediaURL } from "@/lib/utils";
import type { AiPractice } from "@/payload-types";

type Props = NonNullable<AiPractice["aiPrototyping"]> & {
  index: number;
};

const AIPrototypeSection = async ({
  title,
  content,
  prototypes,
  index,
}: Props) => {
  const prototypeData = await Promise.all(
    prototypes?.map(async (prototype) => ({
      ...(await getMediaURL(prototype.image)),
      redirectUrl: prototype.redirectUrl,
      key: prototype.id,
    })) ?? [],
  );

  return (
    <Section id="ai-prototyping">
      <Title index={index}>{title}</Title>

      <LeftWrapper>
        <RichText data={content} className="prose" />
      </LeftWrapper>

      {/* Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {prototypeData?.map((prototype) => {
          if (!prototype?.src) return null;

          return (
            <Link
              href={prototype.redirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              key={prototype.key}
              className={cn(
                "relative w-full aspect-video bg-muted rounded-2xl overflow-hidden group",
                !prototype.redirectUrl && "cursor-default pointer-events-none",
              )}
            >
              <Image
                src={prototype.src}
                alt={prototype.alt ?? ""}
                fill
                className="object-cover group-hover:scale-101 transition-all duration-300 ease-in-out"
                placeholder={prototype.base64Preview ? "blur" : "empty"}
                blurDataURL={prototype.base64Preview}
              />
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default AIPrototypeSection;
