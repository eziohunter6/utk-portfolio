import Title from "@/components/Title";
import WorkCard from "@/components/WorkCard";
import type { TWork } from "@/lib/types";

type Props = {
  index: number;
  works: TWork[];
};

const MoreWorkSection = ({ index, works }: Props) => (
  <section id="more-work">
    <Title index={index}>More Work</Title>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16 mb-16">
      {works.map((work) => (
        <WorkCard key={work.title} {...work} />
      ))}
    </div>
  </section>
);

export default MoreWorkSection;
