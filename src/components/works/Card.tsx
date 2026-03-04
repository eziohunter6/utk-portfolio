import { RichText } from "@payloadcms/richtext-lexical/react";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TWork } from "@/lib/types";
import { getMediaURL } from "@/lib/utils";

const WorkCard = ({
  title,
  image,
  link: { href, target },
  tags,
  description,
}: TWork) => {
  const imageData = getMediaURL(image);

  return (
    <Link
      href={href}
      target={target ?? "_self"}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className="group flex flex-col gap-6"
    >
      <figure className="relative overflow-hidden w-full aspect-8/5 rounded-2xl bg-muted">
        {imageData && (
          <Image
            src={imageData.src}
            alt={imageData.alt}
            fill
            className="object-cover object-top-left group-hover:scale-105 transition-all duration-300 ease-in-out"
          />
        )}
      </figure>

      {tags && (
        <div className="flex flex-row items-center gap-2">
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

      <h3 className="text-3xl flex items-baseline justify-between gap-6">
        <span className="line-clamp-2">{title}</span>
        <ArrowUpRightIcon className="size-6 shrink-0 origin-bottom-left group-hover:scale-120 transition-all duration-300 ease-in-out" />
      </h3>

      <hr className="border-current" />

      {description && (
        <RichText data={description} className="prose prose-xl" />
      )}
    </Link>
  );
};

export default WorkCard;
