import { RichText } from "@payloadcms/richtext-lexical/react";
import Image from "next/image";
import Link from "next/link";
import ContentWrapper from "@/components/ui/ContentWrapper";
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
      image: await getMediaURL(prototype.image),
      darkImage: await getMediaURL(prototype.darkImage),
      redirectUrl: prototype.redirectUrl,
      key: prototype.id,
    })) ?? [],
  );

  return (
    <Section id="ai-prototyping">
      <Title index={index}>{title}</Title>

      <ContentWrapper>
        <RichText data={content} className="prose" />
      </ContentWrapper>

      {/* Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {prototypeData?.map((prototype) => {
          if (!prototype?.image) return null;

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
                src={prototype.image.src}
                alt={prototype.image.alt ?? ""}
                fill
                className="object-cover group-hover:scale-101 transition-all duration-300 ease-in-out"
                placeholder={prototype.image.base64Preview ? "blur" : "empty"}
                blurDataURL={prototype.image.base64Preview}
              />
              {prototype.darkImage && (
                <Image
                  src={prototype.darkImage.src}
                  alt={prototype.darkImage.alt ?? ""}
                  fill
                  className="hidden dark:block object-cover group-hover:scale-101 transition-all duration-300 ease-in-out"
                  placeholder={
                    prototype.darkImage.base64Preview ? "blur" : "empty"
                  }
                  blurDataURL={prototype.darkImage.base64Preview}
                />
              )}
            </Link>
          );
        })}
      </div>
    </Section>
  );
};

export default AIPrototypeSection;
