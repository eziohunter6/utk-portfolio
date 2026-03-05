import Section from "@/components/ui/Section";
import Title from "@/components/ui/Title";
import WorkCard from "@/components/works/Card";
import { filterPopulated } from "@/lib/utils";
import type { Home, Work } from "@/payload-types";

type Props = NonNullable<Home["works"]>;

const WorkSection = (props: Props) => {
  const extendedCases = filterPopulated<Work>(props.extendedCases);
  const miniCases = filterPopulated<Work>(props.miniCases);

  return (
    <Section id="works">
      <Title index={1} className="mb-24">
        Selected Work
      </Title>

      {/* Extended Cases */}
      {extendedCases.length > 0 && (
        <>
          <h3 className="text-2xl border-b-2 border-current mb-12">
            Extended Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {extendedCases.map((work) => (
              <WorkCard key={work.title} {...work} />
            ))}
          </div>
        </>
      )}

      {/* Mini Cases */}
      {miniCases.length > 0 && (
        <>
          <h3 className="text-2xl border-b-2 border-current mb-8 mt-16">
            Mini Cases
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-16">
            {miniCases.map((work) => (
              <WorkCard key={work.slug} {...work} />
            ))}
          </div>
        </>
      )}
    </Section>
  );
};

export default WorkSection;
