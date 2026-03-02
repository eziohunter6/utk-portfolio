import MoreWorkSection from "@/components/works/MoreWorks";
import { WORKS } from "@/constants/works";
import AnalysisSection from "./components/AnalysisSection";
import ExplorationTradeoffsSection from "./components/ExplorationTradeoffsSection";
import FinalDesignsSection from "./components/FinalDesignsSection";
import HeroSection from "./components/HeroSection";
import OutcomeSection from "./components/OutcomeSection";
import ProcessSection from "./components/ProcessSection";
import ReflectionsSection from "./components/ReflectionsSection";
import StrategyLimitationsSection from "./components/StrategyLimitationsSection";

const BuyHomepagePage = () => (
  <main id="buy-homepage">
    <HeroSection />
    <ProcessSection />
    <AnalysisSection />
    <StrategyLimitationsSection />
    <ExplorationTradeoffsSection />
    <FinalDesignsSection />
    <OutcomeSection />
    <ReflectionsSection />
    <MoreWorkSection
      index={9}
      works={WORKS.filter((work) => work.slug !== "buy-homepage").slice(0, 2)}
    />
  </main>
);

export default BuyHomepagePage;
