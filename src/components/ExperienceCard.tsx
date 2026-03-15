"use client";

import { ExperienceProps } from "@/lib/types";
import { cn, getMonthName, getTotalExpTime } from "@/lib/utils";
import { ChevronDown, ChevronUp, InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

export const ExperienceCard = (props: {
  data: ExperienceProps;
  isTimeLineVisible: boolean;
  isFirstItem?: boolean;
}) => {
  const { data, isTimeLineVisible } = props;

  const { years: yearsExp, months: monthsExp } = getTotalExpTime(
    data.date.from,
    data.date.isPresent ? "current" : data.date.to!
  );

  const [isCollapsed, setIsCollapsed] = useState(true);

  const isProjectsVisible = data?.description && data?.description?.length > 0;

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
          <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-primary/10 liquid-glass">
            <Image
              src={data.img}
              alt={data.title}
              className="object-cover bg-black"
              height={100}
              width={100}
            />
          </div>
        </Link>
      ) : (
        <div className="w-16 h-16 overflow-hidden rounded-full liquid-glass">
          <Image
            src={data.img}
            alt={data.title}
            className="object-cover bg-black"
            height={100}
            width={100}
          />
        </div>
      )}

      <div
        className={cn("w-full")}
      >
        {/* TITLE */}
        <div className="flex items-centre justify-between gap-2">
          <h2 className="text-lg font-semibold italic flex items-center justify-center gap-2.5">
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
              {data?.description?.map(
                (description: string) => (
                  <li key={description} className="flex items-start justify-start gap-2 my-1.5 italic">
                    <span className="block size-1 aspect-square rounded-full bg-primary mt-2" />
                    <p className="text-primary text-xs sm:text-sm inline font-light tracking-wide">
                      {description}
                    </p>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      {/* COLLAPSE BUTTON */}
      {isProjectsVisible && (
        <Button variant="outline" size="icon" onClick={() => setIsCollapsed((prev) => !prev)} className="w-8 h-8 transition-transform duration-500 ease-in-out mt-2 rounded-full liquid-glass p-1 cursor-pointer hover:shadow-md text-primary/60 hover:text-primary bg-primary/5">
          {isCollapsed ? (
            <ChevronDown />
          ) : (
            <ChevronUp />
          )}
        </Button>
      )}
    </div>
  );
};
