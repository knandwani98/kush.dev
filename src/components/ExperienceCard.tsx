"use client";

import { ExperienceProps } from "@/lib/types";
import { getMonthName, getTotalExpTime } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ExperienceCard = (props: { data: ExperienceProps }) => {
  const { data } = props;
  const { theme } = useTheme();

  const { years: yearsExp, months: monthsExp } = getTotalExpTime(
    data.date.from,
    data.date.isPresent ? "current" : data.date.to!
  );

  return (
    <div
      key={data.title}
      className="flex justify-start items-start gap-3 sm:gap-4 py-4 relative"
    >
      {/* LINE */}
      <div className="border-l-2 border-accent absolute h-full ml-6 sm:ml-8 top-0 -z-10" />

      {/* IMAGE */}

      {data.link ? (
        <Link target="_blank" href={data.link} rel="noopener noreferrer">
          <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full border-2 border-primary/10">
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

      <div>
        {/* DATE */}
        <p className="text-xs text-primary/50">{`${getMonthName(
          data.date.from.month
        )} ${data.date.from.year} - ${
          data.date.isPresent
            ? "current"
            : `${getMonthName(data.date.to?.month)} ${data.date.to?.year}`
        }`}</p>

        {/* TITLE */}
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg mt-1 font-medium">{data.title}</h2>
          {data.role && (
            <p className="text-sm text-primary/50 font-normal">
              <span className="mr-2">
                {yearsExp > 0
                  ? `${yearsExp} ${yearsExp > 1 ? "yrs" : "yr"}`
                  : ""}
              </span>
              <span>
                {monthsExp > 0
                  ? `${monthsExp} ${monthsExp > 1 ? "mos" : "mo"}`
                  : ""}
              </span>
            </p>
          )}
        </div>

        {/* ROLE /COURSE */}
        <p className="text-base text-primary/50 font-normal mb-1">
          {data?.role || data?.course}{" "}
          <span>{data.location ? `(${data.location})` : ""}</span>
        </p>

        {/* DESCRIPTION */}
        <ul>
          {data?.description?.map((line: string, idx: number) => (
            <li key={idx} className="mb-2">
              <p className="text-sm text-primary/80 font-extralight">
                <span className="text-xs mr-2">●</span>
                {line}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
