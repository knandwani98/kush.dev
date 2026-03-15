import React from "react";
import { Socials } from "./Socials";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn("my-container !pb-16 w-full", className)}>

      <div>
        <h1 className="font-bold text-xl sm:text-3xl font-instrumentSerif tracking-wide italic whitespace-nowrap mb-4">
          Let&apos;s Connect
        </h1>

        <Socials location="footer" className="justify-start" />
      </div>

      <Separator className="my-8" />

      <small className="text-sm text-muted-foreground opacity-80">&copy; 2026 Kushal Nandwani.</small>
    </footer>
  );
};
