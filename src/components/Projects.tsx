import { ProjectProps } from "@/lib/types";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Projects = (props: { data: ProjectProps[] }) => {
  const { data } = props;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {data.map((project: ProjectProps) => (
        <li
          key={project.title}
          className="border border-accent rounded-lg py-8 px-6 flex flex-col justify-between items-start shadow-lg"
        >
          {/* IMAGE */}
          <Image
            src={project.img}
            alt={project.title}
            className="rounded-sm"
            width={1000}
            height={1000}
          />

          {/* TITLE */}
          <h3 className="font-semibold text-lg mt-4">{project.title}</h3>

          {/* DESCRIPTION */}
          <p className="text-primary/50 font-extralight text-sm">
            {project.description}
          </p>

          {/* TAGS */}
          <ul className="flex justify-start items-center gap-2 mt-4 flex-wrap">
            {project?.tags?.map((tag) => (
              <li key={tag}>
                <p className="text-[10px] rounded-md flex justify-start items-center gap-1 bg-secondary text-primary py-1 px-2 whitespace-nowrap">
                  {tag}
                </p>
              </li>
            ))}
          </ul>

          {/* LINKS */}
          <div className="flex justify-between items-center w-full mt-4">
            {/* BUTTONS */}
            <div className="flex justify-start gap-4">
              {project?.links?.live && (
                <Link
                  target="_blank"
                  href={project.links.live}
                  className="text-[10px] rounded-md flex justify-start items-center gap-1 bg-primary hover:bg-primary/80 text-secondary py-1.5 px-3"
                >
                  <span>
                    <Globe className="size-4" />
                  </span>
                  Website
                </Link>
              )}

              {project?.links?.github && (
                <Link
                  target="_blank"
                  href={project.links.github}
                  className="text-[10px] rounded-md flex justify-start items-center gap-1 bg-primary hover:bg-primary/80 text-secondary py-1.5 px-3"
                >
                  <span>
                    <Github className="size-4" />
                  </span>
                  Source
                </Link>
              )}
            </div>

            {/* DATE */}
            {project.date && (
              <p className="text-xs text-primary/50">
                {project.date.month} {project.date.year}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
