import MoreWorkSection from "@/components/works/MoreWorks";
import { getBuyHomeContent } from "@/lib/services";
import AnalysisSection from "./components/AnalysisSection";
import ExplorationTradeoffsSection from "./components/ExplorationTradeoffsSection";
import FinalDesignsSection from "./components/FinalDesignsSection";
import HeroSection from "./components/HeroSection";
import OutcomeSection from "./components/OutcomeSection";
import ProcessSection from "./components/ProcessSection";
import ReflectionsSection from "./components/ReflectionsSection";
import StrategyLimitationsSection from "./components/StrategyLimitationsSection";

export default async function BuyHomePage() {
  const content = await getBuyHomeContent();

  return (
    <main id="buy-homepage">
      <HeroSection />
      <ProcessSection />
      <AnalysisSection />
      <StrategyLimitationsSection />
      <ExplorationTradeoffsSection />
      <FinalDesignsSection />
      <OutcomeSection />
      <ReflectionsSection />
      <MoreWorkSection index={9} works={[]} />
    </main>
  );
}
