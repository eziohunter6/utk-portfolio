import MoreWorkSection from "@/components/works/MoreWorks";
import { getBuyHomeContent } from "@/lib/services";
import { filterPopulated } from "@/lib/utils";
import {
  AnalysisSection,
  ExplorationTradeoffsSection,
  FinalDesignsSection,
  HeroSection,
  OutcomeSection,
  ProcessSection,
  ReflectionsSection,
  StrategyLimitationsSection,
} from "./components";

export default async function BuyHomePage() {
  const {
    hero,
    process,
    analysis,
    strategy,
    exploration,
    finalDesigns,
    outcome,
    reflections,
    moreWork,
  } = await getBuyHomeContent();

  return (
    <main id="buy-homepage">
      <HeroSection {...hero} index={1} />
      <ProcessSection {...process} index={2} />
      <AnalysisSection {...analysis} index={3} />
      <StrategyLimitationsSection {...strategy} index={4} />
      <ExplorationTradeoffsSection {...exploration} index={5} />
      <FinalDesignsSection {...finalDesigns} index={6} />
      <OutcomeSection {...outcome} index={7} />
      <ReflectionsSection {...reflections} index={8} />
      <MoreWorkSection
        works={filterPopulated(moreWork?.works ?? [])}
        index={9}
      />
    </main>
  );
}
