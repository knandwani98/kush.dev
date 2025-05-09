import { ExperienceTab } from "@/components/ExperienceTab";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen">
      {/* Hero */}
      <HeroSection />

      <ExperienceTab />

      <FeaturedProjects />

      <TechStack />
    </main>
  );
}
