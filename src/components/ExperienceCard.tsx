import { ExperienceProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ExperienceCard = (props: { data: ExperienceProps }) => {
  const { data } = props;

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
          <div className="w-12 h-12 sm:w-16 sm:h-16 overflow-hidden rounded-full">
            <Image
              src={data.img}
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
            src={data.img}
            alt={data.title}
            className="object-cover"
            height={100}
            width={100}
          />
        </div>
      )}

      <div>
        {/* DATE */}
        <p className="text-xs text-primary/50">{`${data.date.from.month} ${
          data.date.from.year
        } - ${
          data.date.isPresent
            ? "current"
            : `${data.date.to?.month} ${data.date.to?.year}`
        }`}</p>

        {/* TITLE */}
        <h2 className="text-lg mt-1 font-medium">{data.title}</h2>

        {/* ROLE /COURSE */}
        <p className="text-base text-primary/50 mb-1 font-normal">
          {data?.role || data?.course}
        </p>

        {/* DESCRIPTION */}
        <ul>
          {data?.description?.map((line: string, idx: number) => (
            <li key={idx}>
              <p className="text-sm text-primary/70 font-extralight">
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
