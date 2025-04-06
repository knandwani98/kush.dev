import { myAge } from "@/lib/utils";
import { CloudDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Socials } from "./Socials";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="lg:flex justify-between items-end gap-12 py-6 lg:py-16 my-container w-full">
      <div className="w-full max-lg:mb-8 max-sm:mb-6">
        <Image
          src={
            "https://res.cloudinary.com/dsnxu6br1/image/upload/v1743930250/personal/fvwpjjumwqjsghuotcnr.jpg"
          }
          className="rounded-xl lg:-rotate-6 lg:hover:rotate-0 transition-transform ease-in max-lg:size-40"
          alt="my avatar"
          width={1000}
          height={1000}
        />
      </div>

      <div className="grid gap-6">
        <h1 className="font-bold text-4xl sm:text-6xl whitespace-nowrap max-sm:-mb-4">
          Hey! Kush here 👋🏻
        </h1>
        <div>
          <p className="text-sm sm:text-base tracking-wide leading-6 sm:leading-7 mb-1">
            {myAge()}-year-old software developer from India 🇮🇳
            <br />I am a full-stack web app developer, also working on mobile
            app development.
          </p>
        </div>

        <div className="flex gap-4 justify-start items-center w-full">
          <Link
            href={"/resume/resume.pdf"}
            download="kushal-nandwani-resume"
            target="_blank"
          >
            <Button variant={"outline"} className="flex gap-2">
              <CloudDownload className="size-4" />
              Resume
            </Button>
          </Link>
          <Socials />
        </div>
      </div>
    </section>
  );
};
