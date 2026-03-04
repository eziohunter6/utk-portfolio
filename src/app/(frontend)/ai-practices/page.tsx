import type { Metadata } from "next";
import ContactSection from "@/app/(frontend)/(home)/components/ContactSection";
import { buildMetadataFromPayload } from "@/lib/seo";
import { getAiPracticesContent } from "@/lib/services";
import AIContentSection from "./components/AIContentSection";
import AIPrototypeSection from "./components/AIPrototypeSection";
import AIVideoSection from "./components/AIVideoSection";
import HeroSection from "./components/HeroSection";

export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await getAiPracticesContent();

  return buildMetadataFromPayload({
    meta,
    urlPath: "/ai-practices",
  });
};

export default async function AiPracticesPage() {
  const { hero, aiContent, aiVideo, aiPrototyping } =
    await getAiPracticesContent();

  return (
    <main id="ai-practices">
      <HeroSection {...hero} index={1} />
      <AIPrototypeSection {...aiPrototyping} index={4} />
      <AIVideoSection {...aiVideo} index={3} />
      <AIContentSection {...aiContent} index={2} />
      <ContactSection index={5} />
    </main>
  );
}
