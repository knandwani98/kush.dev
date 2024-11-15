import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Projects } from "./Projects";
import { PROJECTS_DATA } from "@/lib/data";

export const FeaturedProjects = () => {
  return (
    <section className="my-container w-full my-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl sm:text-3xl whitespace-nowrap">
          featured projects
        </h1>

        <Link
          href={"/projects"}
          className="max-sm:text-xs flex justify-start gap-2 items-center text-primary/50"
        >
          view more
          <ArrowRight className="size-5" />
        </Link>
      </div>

      <Projects data={PROJECTS_DATA.slice(0, 2)} />
    </section>
  );
};
