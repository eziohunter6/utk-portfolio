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
    <main className="w-full pt-32 sm:pt-40 md:pt-48 lg:pt-52">
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
