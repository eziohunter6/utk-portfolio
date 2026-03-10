import type { Metadata } from "next";
import { buildMetadataFromPayload } from "@/lib/seo";
import { getEcTimesContent } from "@/lib/services";

import {
  ChallengeSection,
  HeroSection,
  ImpactSection,
  ProblemSection,
} from "./components";

export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await getEcTimesContent();

  return buildMetadataFromPayload({
    meta,
    urlPath: "/work/ec-times",
  });
};

type Props = {
  isModal?: boolean;
};

export default async function EcTimesPage({ isModal }: Props) {
  const { hero, challenge, problem, impact } = await getEcTimesContent();

  return (
    <main id="ec-times-page">
      <HeroSection {...hero} index={0} isModal={isModal} />
      <ProblemSection {...problem} index={1} isModal={isModal} />
      <ChallengeSection {...challenge} index={2} isModal={isModal} />
      <ImpactSection {...impact} index={3} isModal={isModal} />
    </main>
  );
}
