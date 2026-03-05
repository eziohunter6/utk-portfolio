import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TWork } from "@/lib/types";
import { getMediaURL } from "@/lib/utils";

const WorkCard = async ({
  title,
  image,
  link: { href, target },
  tags,
  description,
}: TWork) => {
  const imageData = await getMediaURL(image);

  return (
    <Link
      href={href}
      target={target ?? "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group"
    >
      <figure className="relative overflow-hidden w-full aspect-8/5 rounded-2xl bg-muted">
        {imageData && (
          <Image
            src={imageData.src}
            alt={imageData.alt}
            fill
            className="object-cover object-top-left group-hover:scale-105 transition-all duration-300 ease-in-out"
            placeholder={imageData.base64Preview ? "blur" : "empty"}
            blurDataURL={imageData.base64Preview}
          />
        )}
      </figure>

      {tags && (
        <div className="flex flex-row items-center gap-2 mt-6 mb-3">
          <div className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.keyword}
                className="text-xs px-2.5 py-1.5 bg-tag-bg rounded-full"
              >
                {tag.keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      <hgroup className="text-3xl flex items-baseline justify-between gap-6">
        <h3>
          {title.split("\\n").map((line, index) => (
            <span key={index} className="line-clamp-2">
              {line}
            </span>
          ))}
        </h3>
        <ArrowUpRightIcon className="size-6 shrink-0 origin-bottom-left group-hover:scale-120 transition-all duration-300 ease-in-out" />
      </hgroup>

      <hr className="border-current my-6" />

      {description && (
        <RichText data={description} className="prose prose-xl leading-7" />
      )}
    </Link>
  );
};

export default WorkCard;
