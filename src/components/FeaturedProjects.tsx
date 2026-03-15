import Link from "next/link";
import React from "react";
import { Projects } from "./Projects";
import { PROJECTS_DATA } from "@/data";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export const FeaturedProjects = ({ className }: { className?: string }) => {
  return (
    <section className={cn("my-container w-full", className)}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-xl sm:text-3xl font-instrumentSerif tracking-wide italic whitespace-nowrap">
          Featured Projects
        </h1>
      </div>

      <section className="flex flex-col gap-12">
        <Projects data={PROJECTS_DATA.slice(0, 2)} />

        <Link
          href={"/projects"}
          className="max-sm:text-xs flex justify-center gap-2 items-center"
        >
          <Button className="rounded-full hover:shadow-md bg-primary text-primary-foreground">
            view all
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </Link>
      </section>
    </section>
  );
};
