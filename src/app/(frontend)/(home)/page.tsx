import type { Metadata } from "next";
import { buildMetadataFromPayload } from "@/lib/seo";
import { getHomeContent } from "@/lib/services";
import {
  ContactSection,
  HeroSection,
  InfoSection,
  WorkSection,
} from "./components";

export const generateMetadata = async (): Promise<Metadata> => {
  const { meta } = await getHomeContent();

  return buildMetadataFromPayload({
    meta,
    urlPath: "/",
  });
};

export default async function Home() {
  const { hero, works, info } = await getHomeContent();

  return (
    <main id="home">
      {/* Hero Section */}
      <HeroSection {...hero} />

      {/* Work Section */}
      <WorkSection {...works} />

      {/* Info Section */}
      <InfoSection {...info} />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
