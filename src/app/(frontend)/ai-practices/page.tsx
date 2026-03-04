import ContactSection from "@/app/(frontend)/(home)/components/ContactSection";
import { getAiPracticesContent } from "@/lib/services";
import AIContentSection from "./components/AIContentSection";
import AIPrototypeSection from "./components/AIPrototypeSection";
import AIVideoSection from "./components/AIVideoSection";
import HeroSection from "./components/HeroSection";

export default async function AiPracticesPage() {
  const { hero, aiContent, aiVideo, aiPrototyping } =
    await getAiPracticesContent();

  return (
    <main id="ai-practices">
      <HeroSection {...hero} index={1} />
      <AIContentSection {...aiContent} index={2} />
      <AIVideoSection {...aiVideo} index={3} />
      <AIPrototypeSection {...aiPrototyping} index={4} />
      <ContactSection index={5} />
    </main>
  );
}
