"use client";

import { useEffect, useState } from "react";
import { ExperienceTab } from "@/components/ExperienceTab";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { HeroSection } from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/SlideIn";

export default function Home() {
  const [isAppMounted, setIsAppMounted] = useState(false);

  useEffect(() => setIsAppMounted(true), []);

  if (!isAppMounted) return null;
  return (
    <main className="flex flex-col">

      <HeroSection className="dashed-border pb-4 sm:pb-8" />

      <ExperienceTab className="dashed-border p-4 sm:p-8" />

      <FadeIn>
        <FeaturedProjects className="dashed-border p-4 sm:p-8" />
      </FadeIn>

      <TechStack className="dashed-border p-4 sm:p-8" />

      <Footer className="dashed-border p-4 sm:p-8 border-b-0" />
    </main>
  );
}
