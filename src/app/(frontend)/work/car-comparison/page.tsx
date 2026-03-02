import MoreWorkSection from "@/components/works/MoreWorks";
import DesignExplorationSection from "./components/DesignExplorationSection";
import FinalDesignsSection from "./components/FinalDesignsSection";
import FloorTestingSection from "./components/FloorTestingSection";
import HeroSection from "./components/HeroSection";
import HypothesisSection from "./components/HypothesisSection";
import OpportunitySection from "./components/OpportunitySection";
import OutcomeSection from "./components/OutcomeSection";
import ProblemSection from "./components/ProblemSection";
import ReflectionsSection from "./components/ReflectionsSection";

const CarComparisonPage = () => (
  <main id="car-comparison">
    <HeroSection />
    <OpportunitySection />
    <ProblemSection />
    <HypothesisSection />
    <DesignExplorationSection />
    <FloorTestingSection />
    <FinalDesignsSection />
    <OutcomeSection />
    <ReflectionsSection />
    <MoreWorkSection index={10} works={[]} />
  </main>
);

export default CarComparisonPage;
