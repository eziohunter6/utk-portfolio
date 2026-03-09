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

type Props = {
  isModal?: boolean;
};

export default async function ClearTripPage({ isModal }: Props) {
  const { hero, challenge, problem, impact } = await getClearTripContent();

  return (
    <main id="clear-trip-page">
      <HeroSection {...hero} index={1} isModal={isModal} />
      <ProblemSection {...problem} index={2} isModal={isModal} />
      <ChallengeSection {...challenge} index={3} isModal={isModal} />
      <ImpactSection {...impact} index={4} isModal={isModal} />
    </main>
  );
}
