"use client";

import { ToggleThemeButton } from "@/components/ToggleThemeButton";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const Layout = ({
  title,
  actions,
  children,
}: {
  title: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className="my-container px-4 py-10 sm:px-8 sm:py-20 print:m-0 print:max-w-none print:bg-white print:p-0">
      <div className="mb-12 flex items-center justify-between gap-4 print:hidden">
        <div className="flex items-center justify-start gap-4">
          <Link href="/">
            <Button
              size="icon"
              variant="ghost"
              className="liquid-glass size-12 rounded-full p-2 transition-[transform,color] duration-500 ease-apple hover:scale-[1.02] hover:-translate-x-1 dark:dark dark:text-white"
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              <ArrowLeft className="size-8 opacity-80 hover:opacity-100" />
            </Button>
          </Link>
          <h1 className="relative h-[1.2em] min-w-[200px] overflow-hidden whitespace-nowrap text-3xl font-bold sm:min-w-[280px] sm:text-5xl">
            <span
              className={cn(
                "absolute left-0 top-0 transition-[transform,opacity] duration-500 ease-apple",
                !isButtonHovered
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none -translate-x-4 opacity-0"
              )}
            >
              {title}
            </span>
            <span
              className={cn(
                "absolute left-0 top-0 transition-[transform,opacity] duration-500 ease-apple",
                isButtonHovered
                  ? "translate-x-0 opacity-100"
                  : "pointer-events-none translate-x-4 opacity-0"
              )}
            >
              go back
            </span>
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {actions}
          <ToggleThemeButton className="liquid-glass size-12 rounded-full opacity-90 hover:opacity-100" size={20} />
        </div>
      </div>

      {children}
    </div>
  );
};
