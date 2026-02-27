import Title from "@/components/Title";
import { WORKS } from "@/constants/works";
import WorkCard from "./WorkCard";

const WorkSection = () => (
  <section id="work">
    <Title hideUnderLine index={1}>
      Selected Work
    </Title>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
      {WORKS.map((work) => (
        <WorkCard key={work.title} {...work} />
      ))}
    </div>
  </section>
);

export default WorkSection;
