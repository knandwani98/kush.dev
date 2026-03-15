"use client";

import { ProjectProps } from "@/lib/types";
import { getMonthName } from "@/lib/utils";
import { Globe } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export const Projects = (props: { data: ProjectProps[] }) => {
  const { data } = props;
  const { theme } = useTheme();

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.map((project: ProjectProps) => (
        <li
          key={project.title}
          className="liquid-glass border border-accent rounded-lg py-8 px-6 flex flex-col justify-between items-start shadow-lg"
        >

          {/* IMAGE */}
          {project?.links?.live ? (
            <Link target="_blank" href={project.links.live}>
              <Image
                src={
                  theme === "dark"
                    ? project.isDarkMode
                      ? project.img.replace(".png", "-dark.png")
                      : project.img
                    : project.img
                }
                alt={project.title}
                className="rounded-sm"
                width={1000}
                height={1000}
              />

            </Link>
          ) : (
            <Image
              src={project.img}
              alt={project.title}
              className="rounded-sm"
              width={1000}
              height={1000}
            />
          )}

          {/* TITLE */}
          <h3 className="font-semibold text-lg mt-4">{project.title}</h3>

          {/* DESCRIPTION */}
          <p className="text-primary/50 font-extralight text-sm">
            {project.description}
          </p>

          {/* TAGS */}
          <ul className="flex justify-start items-center gap-2 mt-4 flex-wrap">
            {project?.tags?.map((tag) => (
              <li key={tag} className="liquid-glass shadow border border-accent text-[10px] rounded-full flex justify-start items-center gap-1 bg-secondary text-primary py-1 px-3 whitespace-nowrap">
                <p className="">
                  {tag}
                </p>
              </li>
            ))}
          </ul>

          {/* LINKS */}
          <div className="flex justify-between items-center w-full mt-4">
            {/* BUTTONS */}
            <div className="flex justify-start gap-2">
              {project?.links?.live && (
                <Link
                  target="_blank"
                  href={project.links.live}
                >
                  <Button className="rounded-full bg-black text-xs flex justify-start items-center gap-2 bg-primary hover:bg-primary/80 py-2 px-4">
                    <Globe className="size-4" />
                    Preview
                  </Button>
                </Link>
              )}

              {project?.links?.github && (
                <Link
                  target="_blank"
                  href={project.links.github}
                >
                  <Button className="rounded-full bg-black text-xs flex justify-start items-center gap-2 bg-primary hover:bg-primary/80 py-2 px-4">
                    <Image src="/socials/github.svg" alt="GitHub" width={16} height={16} className="invert dark:invert-0" />
                    Code
                  </Button>
                </Link>
              )}
            </div>

            {/* DATE */}
            {project.date && (
              <p className="text-xs text-primary/50 italic font-instrumentSerif tracking-wide">
                {getMonthName(project.date.month)} {project.date.year}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
