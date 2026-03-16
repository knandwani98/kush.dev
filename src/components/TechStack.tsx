import { TECH_STACK_DATA } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "./ui/button";

export const TechStack = ({ className }: { className?: string }) => {
  const listRef = useRef(null);
  const isInView = useInView(listRef, { once: true, margin: "-80px" });

  return (
    <section className={cn("my-container w-full", className)}>
      <h1 className="font-bold text-xl sm:text-3xl font-instrumentSerif tracking-wide italic whitespace-nowrap mb-4 sm:mb-8">
        Tech Stack
      </h1>
      <ul
        ref={listRef}
        className="flex flex-wrap justify-center items-center gap-2 sm:gap-4"
      >
        {TECH_STACK_DATA.map((tech, index) => (
          <li
            key={tech.label}
            className={cn(
              "tech-item opacity-0 translate-y-[12px] blur-[4px]",
              isInView && "tech-item-visible"
            )}
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <Button variant={"outline"} className="liquid-glass flex items-center justify-center gap-2.5 rounded-2xl px-4 py-1.5 relative overflow-hidden"
            >
              <Image
                className={cn(
                  "size-5 md:size-6 aspect-square object-contain",
                  tech.invert && "invert dark:invert-0"
                )}
                src={tech.icon}
                alt={tech.label}
                width={48}
                height={48}
              />
              <p className="whitespace-nowrap font-normal text-xs lg:text-sm">
                {tech.label}
              </p>

              <span
                className="absolute inset-0 -z-10 opacity-70 blur-xl invert dark:invert-0"
                style={{
                  background: `radial-gradient(circle at center, ${tech.color} 0%, transparent 100%)`,
                }}
              />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
