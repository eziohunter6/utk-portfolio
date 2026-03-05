import Title from "@/components/ui/Title";
import WorkCard from "@/components/works/Card";
import type { Work } from "@/payload-types";
import Section from "../ui/Section";

type Props = {
  index: number;
  works: Work[];
};

const MoreWorkSection = ({ index, works }: Props) => (
  <Section id="more-work">
    <Title index={index}>More Work</Title>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mb-16">
      {works.map((work) => (
        <WorkCard key={work.title} {...work} />
      ))}
    </div>
  </Section>
);

export default MoreWorkSection;
