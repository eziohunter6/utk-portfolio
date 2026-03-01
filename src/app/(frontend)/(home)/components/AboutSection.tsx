import Image from "next/image";
import Link from "next/link";
import { WORKED_AT } from "@/constants/works";
import HandSvg from "./HandSvg";

const AboutSection = () => (
  <>
    {/* Small About Section */}
    <section className="flex flex-col gap-2 w-full md:w-3/4 lg:w-3/5 my-16">
      <HandSvg className="size-16 md:size-24" />

      <h3 className="text-xl sm:text-2xl md:text-3xl">
        Hello! I’m a senior product design partner to founders and tech
        companies.
      </h3>
      <p className="text-base md:text-lg font-normal">
        I help founders, tech companies, and fast-moving teams turn ideas into
        real products. My hands-on, practical approach builds momentum by
        keeping teams focused, communication clear, and projects moving forward.
      </p>
    </section>

    {/* Worked At */}
    <section className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen bg-brand text-white/35 py-4">
      <h3 className="text-[0.6rem] sm:text-xs font-semibold text-center">
        WORKED AT
      </h3>

      <div className="flex flex-row justify-center py-4">
        {WORKED_AT.map(({ name, icon, link }) => (
          <div key={name} className="flex flex-row items-center group">
            <Link href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/icons/${icon}.svg`}
                alt={name}
                height={32}
                width={100}
                className="object-contain h-4 sm:h-8 w-auto"
              />
            </Link>

            <span className="mx-2 sm:mx-4 h-2/3 w-[1.5px] rounded-full bg-[#778BFF] group-last:hidden" />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default AboutSection;
