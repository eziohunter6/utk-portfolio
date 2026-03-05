import type { Metadata } from "next";
import { buildMetadataFromPayload } from "@/lib/seo";
import { getClearTripContent } from "@/lib/services";

import {
  ChallengeSection,
  HeroSection,
  ImpactSection,
  ProblemSection,
} from "./components";

export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await getClearTripContent();

  return buildMetadataFromPayload({
    meta,
    urlPath: "/work/clear-trip",
  });
};

export default async function ClearTripPage() {
  const { hero, challenge, problem, impact } = await getClearTripContent();

  return (
    <main id="clear-trip-page">
      <HeroSection {...hero} index={1} />
      <ProblemSection {...problem} index={2} />
      <ChallengeSection {...challenge} index={3} />
      <ImpactSection {...impact} index={4} />
    </main>
  );
}
