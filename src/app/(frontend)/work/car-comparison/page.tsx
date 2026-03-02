import MoreWorkSection from "@/components/works/MoreWorks";
import { getCarComparisonContent } from "@/lib/services";
import { filterPopulated } from "@/lib/utils";
import {
  DesignExplorationSection,
  FinalDesignsSection,
  FloorTestingSection,
  HeroSection,
  HypothesisSection,
  OpportunitySection,
  OutcomeSection,
  ProblemSection,
  ReflectionsSection,
} from "./components";

export default async function CarComparisonPage() {
  const {
    hero,
    opportunity,
    problem,
    hypothesis,
    exploration,
    floorTesting,
    finalDesigns,
    outcome,
    reflections,
    moreWork,
  } = await getCarComparisonContent();

  return (
    <main id="car-comparison">
      <HeroSection {...hero} index={1} />
      <OpportunitySection {...opportunity} index={2} />
      <ProblemSection {...problem} index={3} />
      <HypothesisSection {...hypothesis} index={4} />
      <DesignExplorationSection {...exploration} index={5} />
      <FloorTestingSection {...floorTesting} index={6} />
      <FinalDesignsSection {...finalDesigns} index={7} />
      <OutcomeSection {...outcome} index={8} />
      <ReflectionsSection {...reflections} index={9} />
      <MoreWorkSection
        works={filterPopulated(moreWork?.works ?? [])}
        index={10}
      />
    </main>
  );
}
