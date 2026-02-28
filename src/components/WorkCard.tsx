import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { TWork } from "@/lib/types";

const WorkCard = ({ title, image, link }: TWork) => {
  return (
    <Link {...link} className="group flex flex-col gap-2">
      <figure className="relative overflow-hidden w-full aspect-8/5 rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover object-top-left group-hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </figure>

      <h3 className="text-base sm:text-lg flex items-center justify-between gap-2">
        {title}
        <ArrowUpRightIcon className="w-6 h-6 origin-bottom-left group-hover:scale-105 transition-all duration-300 ease-in-out" />
      </h3>
    </Link>
  );
};

export default WorkCard;
