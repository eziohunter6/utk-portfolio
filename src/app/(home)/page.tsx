import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import WorkSection from "./components/WorkSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <InfoSection />
      <ContactSection />
    </main>
  );
}
