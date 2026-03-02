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
      className="group flex flex-col gap-2"
    >
      <figure className="relative overflow-hidden w-full aspect-8/5 rounded-2xl">
        <Image
          src={imageData?.src ?? ""}
          alt={imageData?.alt ?? title}
          fill
          className="object-cover object-top-left group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </figure>

      {tags && (
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-row gap-2 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.keyword}
                className="text-sm px-4 py-2 bg-tag-bg rounded-full"
              >
                {tag.keyword}
              </span>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-base sm:text-lg flex items-center justify-between gap-2">
        <span>{title}</span>
        <ArrowUpRightIcon className="w-6 h-6 origin-bottom-left group-hover:scale-105 transition-all duration-300 ease-in-out" />
      </h3>

      {description && <RichText data={description} className="prose" />}
    </Link>
  );
};

export default WorkCard;
