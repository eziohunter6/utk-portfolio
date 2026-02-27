import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const WorkCard = ({ title, image, link }: Props) => {
  return (
    <Link href={link} className="group flex flex-col gap-2">
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
