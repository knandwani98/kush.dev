"use client";

import { ExperienceProps } from "@/lib/types";
import { cn, getMonthName, getTotalExpTime } from "@/lib/utils";
import { ChevronsDownUp, ChevronsUpDownIcon, InfinityIcon } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { WorkProject } from "./WorkProjects";

export const ExperienceCard = (props: {
  data: ExperienceProps;
  isTimeLineVisible: boolean;
  isFirstItem: boolean;
}) => {
  const { data, isTimeLineVisible, isFirstItem } = props;
  const { theme } = useTheme();

  const { years: yearsExp, months: monthsExp } = getTotalExpTime(
    data.date.from,
    data.date.isPresent ? "current" : data.date.to!
  );

  const [isCollapsed, setIsCollapsed] = useState(!isFirstItem);

  const isProjectsVisible = data?.projects && data?.projects?.length > 0;

  return (
    <div
      key={data.title}
      className={cn(
        "flex justify-start items-start gap-2 sm:gap-4 py-4 relative rounded-lg transition-all duration-300 px-2 sm:px-8",
        isProjectsVisible ? "hover:bg-accent/20" : ""
      )}
    >
      {/* LINE */}
      {isTimeLineVisible && (
        <div className="border-l border-primary/20 absolute h-full ml-6 sm:ml-6 -bottom-12 -z-10" />
      )}

      {/* IMAGE */}
      {data.link ? (
        <Link target="_blank" href={data.link} rel="noopener noreferrer">
          <div className="w-12 h-12 overflow-hidden rounded-md border-2 border-primary/10">
            <Image
              src={
                theme === "dark"
                  ? data.img
                  : data.isDarkMode
                  ? data.img.replace(".jpeg", "-dark.jpeg")
                  : data.img
              }
              alt={data.title}
              className="object-cover"
              height={100}
              width={100}
            />
          </div>
        </Link>
      ) : (
        <div className="w-16 h-16 overflow-hidden rounded-full">
          <Image
            src={
              theme === "dark"
                ? data.img
                : data.isDarkMode
                ? data.img.replace(".jpeg", "-dark.jpeg")
                : data.img
            }
            alt={data.title}
            className="object-cover"
            height={100}
            width={100}
          />
        </div>
      )}

      <div
        onClick={() => setIsCollapsed((prev) => !prev)}
        className={cn(
          "w-full",
          isProjectsVisible ? "cursor-pointer select-none" : ""
        )}
      >
        {/* TITLE */}
        <div className="flex items-centre justify-between gap-2">
          <h2 className="text-lg font-medium flex items-center justify-center gap-2.5">
            {data?.role || data?.course}{" "}
            {data.date.isPresent && (
              <span className="relative flex items-center justify-center">
                <span className="absolute inline-flex size-3 animate-ping rounded-full bg-blue-500 opacity-50"></span>
                <span className="relative inline-flex size-2 rounded-full bg-blue-500"></span>
                <span className="sr-only">Current Employer</span>
              </span>
            )}
          </h2>
        </div>

        {/* ROLE /COURSE */}
        <p className="text-primary/50 mb-1 text-sm flex items-center justify-start gap-2">
          {data.title}

          {data.location && (
            <>
              {/* LINE */}
              <span className="block bg-primary/20 h-4 w-[1px]" />

              {/*LOCATION*/}
              <span> {data.location}</span>
            </>
          )}
        </p>

        {/* DATE */}
        <div className="flex items-center justify-start gap-2 max-sm:flex-wrap">
          {/* ROLE TYPE */}
          {data.role_type && (
            <>
              <p className="text-primary/70 text-xs">{data.role_type}</p>
              {/* DOT */}
              <span className="block w-1 h-1 rounded-full bg-primary/20" />
            </>
          )}

          {/* FROM DATE - TO DATE */}
          <p className="text-primary/70 text-xs flex items-center justify-start gap-2">
            {/* FROM DATE */}
            <span>
              {getMonthName(data.date.from.month)} {data.date.from.year}
            </span>

            <span> - </span>

            {/* TO DATE */}
            <span>
              {data.date.isPresent ? (
                <InfinityIcon className="size-4" />
              ) : (
                `${getMonthName(data.date.to?.month)} ${data.date.to?.year}`
              )}
            </span>
          </p>

          {/* TOTAL EXPERIENCE TIME */}
          {data.role && (
            <>
              {/* DOT */}
              <span className="block w-1 h-1 rounded-full bg-primary/20" />

              <p className="text-primary/70 text-xs">
                <span>
                  {yearsExp > 0
                    ? `${yearsExp} ${yearsExp > 1 ? "yrs" : "yr"}`
                    : ""}
                </span>{" "}
                <span>
                  {monthsExp > 0
                    ? `${monthsExp} ${monthsExp > 1 ? "mos" : "mo"}`
                    : ""}
                </span>
              </p>
            </>
          )}
        </div>

        {/* PROJECTS */}
        {isProjectsVisible && (
          <div
            className={cn(
              "overflow-hidden transition-all duration-500 ease-in-out",
              isCollapsed ? "max-h-0 opacity-0" : "max-h-[1000px] opacity-100"
            )}
          >
            <ul className="mt-4">
              {data?.projects?.map(
                (project: { title: string; description: string[] }) => (
                  <WorkProject key={project.title} project={project} />
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* COLLAPSE BUTTON */}
      {isProjectsVisible && (
        <div className="transition-transform duration-500 ease-in-out">
          {!isCollapsed ? (
            <ChevronsDownUp onClick={() => setIsCollapsed(true)} className="w-4 h-4 rotate-0" />
          ) : (
            <ChevronsUpDownIcon onClick={() => setIsCollapsed(false)} className="w-4 h-4 rotate-180" />
          )}
        </div>
      )}
    </div>
  );
};
