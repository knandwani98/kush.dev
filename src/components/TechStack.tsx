import { TECH_STACK_DATA } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export const TechStack = () => {
  return (
    <section className="my-container w-full mb-12">
      <h1 className="font-bold text-xl sm:text-3xl whitespace-nowrap">
        My Stack
      </h1>

      <ul className="flex flex-wrap justify-center items-center gap-4 mt-8">
        {TECH_STACK_DATA.map((tech) => (
          <li
            key={tech.label}
            className="flex items-center justify-start gap-2 backdrop-blur-xl bg-accent/50 rounded-lg px-3 py-1.5 border border-primary/20 relative overflow-hidden"
          >
            <Image
              className={cn(
                "size-6 md:size-8 aspect-square object-contain",
                tech.invert && "invert dark:invert-0"
              )}
              src={tech.icon}
              alt={tech.label}
              width={1000}
              height={1000}
            />
            <p className="whitespace-nowrap font-normal text-xs md:text-sm lg:text-base">
              {tech.label}
            </p>

            <Image
              className={cn(
                "absolute inset-x-0 -z-10 blur-3xl opacity-50",
                tech.invert && "invert dark:invert-0"
              )}
              src={tech.icon}
              alt={tech.label}
              width={1000}
              height={1000}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
