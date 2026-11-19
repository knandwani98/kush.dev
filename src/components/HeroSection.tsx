import { EXPERIENCE_DATA } from "@/data/experience";
import { cn, formatExpTime, getTotalWorkExperience } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { AVATAR_IMG_URL } from "@/data";
import { Socials } from "./Socials";
import { Separator } from "./ui/separator";

const totalWorkExp = getTotalWorkExperience(EXPERIENCE_DATA);

export const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("my-container w-full", className)}>
      {/* COVER IMAGE */}
      <Image src={"/cover.jpg"} alt="Profile Picture" width={1000} height={1000} className="w-full h-52 object-cover object-[50%_58%]" />

      <div className="grid gap-4 -mt-10 relative z-10 px-4 sm:px-8">
        {/* AVATAR IMAGE */}
        <Image src={AVATAR_IMG_URL} alt="my avatar" className="w-32 h-32 rounded-full object-cover object-top" width={1000} height={1000} />

        <div className="flex flex-col">
          <h1 className="text-3xl sm:text-5xl font-medium tracking-normal font-instrumentSerif italic">Kushal Nandwani</h1>
          <p className="text-sm dark:text-amber-500 text-green-600 tracking-wider uppercase">
            React Native & Full-Stack Engineer
            <span className="text-muted-foreground mx-2">|</span>
            {formatExpTime(totalWorkExp)} Exp.
            <span className="text-muted-foreground mx-2">|</span>
            Open to work
          </p>
        </div>

        <Separator className="my-1" />

        <section className="">
          <p className="text-sm sm:text-base font-light text-primary/80">
            I build web and mobile applications with React Native, React, Next.js, and Node.js, taking products from Figma to production. At OffLens, I led Archd, a multi-franchise platform, from initialisation to a live iOS and Android app in two months. I enjoy owning features end to end, building clean interfaces, integrating APIs, and shipping products people actually use.
          </p>
        </section>

        {/* SOCIALS */}
        <Socials />
      </div>
    </section>
  );
};
