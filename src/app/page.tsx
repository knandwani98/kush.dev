"use client";

import { useEffect, useState } from "react";
import { ExperienceTab } from "@/components/ExperienceTab";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  const [isAppMounted, setIsAppMounted] = useState(false);

  useEffect(() => setIsAppMounted(true), []);

  if (!isAppMounted) return null;
  return (
    <main className="flex flex-col gap-4">
      {/* Hero */}
      <HeroSection />

      <ExperienceTab />

      <FeaturedProjects />

      <TechStack />
    </main>
  );
}
