import { cn, getTotalExpTime, myAge } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { AVATAR_IMG_URL } from "@/data";
import { Socials } from "./Socials";
import { Separator } from "./ui/separator";

export const HeroSection = ({ className }: { className?: string }) => {
  return (
    <section className={cn("my-container w-full", className)}>
      {/* COVER IMAGE */}
      <Image src={"/cover.jpg"} alt="my avatar" width={1000} height={1000} className="w-full h-72 object-cover" />

      <div className="grid gap-4 -mt-10 relative z-10 px-8">
        {/* AVATAR IMAGE */}
        <Image src={AVATAR_IMG_URL} alt="my avatar" className="w-32 h-32 rounded-full object-cover object-top" width={1000} height={1000} />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-3xl sm:text-5xl font-medium tracking-normal font-instrumentSerif italic">Kushal Nandwani</h1>
            <p className="text-sm text-muted-foreground opacity-80">{myAge()} • React & Full-Stack Engineer • {getTotalExpTime({ year: 2023, month: 8 }, "current").years}.{getTotalExpTime({ year: 2023, month: 8 }, "current").months} yrs of exp.</p>
          </div>

          {/* SOCIALS */}
          <Socials />
        </div>


        <Separator className="my-1" />

        <section className="">
          <p className="text-sm sm:text-base font-light text-primary/80">
            I build scalable web and mobile applications using React, Next.js, React Native, and modern backend systems.
            From MVPs to production systems, I enjoy owning features end-to-end — building clean interfaces, integrating APIs, optimizing performance, and delivering products that real users depend on.
          </p>
        </section>
      </div>
    </section>
  );
};
