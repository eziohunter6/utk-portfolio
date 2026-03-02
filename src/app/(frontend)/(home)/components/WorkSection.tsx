import Title from "@/components/ui/Title";
import WorkCard from "@/components/works/Card";
import type { getHomeContent } from "@/lib/services";

type Props = Awaited<ReturnType<typeof getHomeContent>>["works"];

const WorkSection = ({ extendedCases, miniCases }: Props) => (
  <section id="work">
    <Title hideUnderLine index={1}>
      Selected Work
    </Title>

    {/* Extended Cases */}
    <h3 className="text-xl border-b-2 border-current mb-8">Extended Cases</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
      {extendedCases.map((work) => (
        <WorkCard key={work.title} {...work} />
      ))}
    </div>

    {/* Mini Cases */}
    <h3 className="text-xl border-b-2 border-current mb-8 mt-16">Mini Cases</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
      {miniCases.map((work) => (
        <WorkCard key={work.slug} {...work} />
      ))}
    </div>
  </section>
);

export default WorkSection;
