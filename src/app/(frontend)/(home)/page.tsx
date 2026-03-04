import { getHomeContent } from "@/lib/services";
import {
  ContactSection,
  HeroSection,
  InfoSection,
  WorkSection,
} from "./components";

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
