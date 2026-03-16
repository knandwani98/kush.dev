"use client";

import { Projects } from "@/components/Projects";
import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { Button } from "@/components/ui/button";
import { PROJECTS_DATA } from "@/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const ProjectsPage = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="my-container px-4 sm:px-8 py-10 sm:py-20">

      <div className="flex justify-between items-center gap-4 mb-12">
        <div className="flex justify-start items-center gap-4">
          <Link href="/">
            <Button
              size={"icon"}
              variant={"ghost"}
              className="liquid-glass dark:dark dark:text-white rounded-full p-2 size-12 transition-[transform,color] duration-500 ease-apple hover:scale-[1.02] hover:-translate-x-1"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <ArrowLeft className="size-8 opacity-80 hover:opacity-100" />
            </Button>
          </Link>
          <h1 className="font-bold text-3xl sm:text-5xl whitespace-nowrap min-w-[200px] sm:min-w-[280px] relative h-[1.2em] overflow-hidden">
            <span
              className={`absolute left-0 top-0 transition-[transform,opacity] duration-500 ease-apple ${!isButtonHovered
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0 pointer-events-none"
                }`}
            >
              my projects.
            </span>
            <span
              className={`absolute left-0 top-0 transition-[transform,opacity] duration-500 ease-apple ${isButtonHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0 pointer-events-none"
                }`}
            >
              go back
            </span>
          </h1>
        </div>

        <ToggleThemeButton className="opacity-90 hover:opacity-100 rounded-full liquid-glass size-12" size={20} />
      </div>

      {/* Projects */}
      <Projects data={PROJECTS_DATA} />
    </div>
  );
};

export default ProjectsPage;
