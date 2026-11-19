"use client";

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipArrow, TooltipTrigger } from "./ui/tooltip";
import { SOCIALS_DATA } from "@/data";
import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "./ToggleThemeButton";


const SocialButton = ({
  href,
  children,
  label,
  isLocationFooter,
  target,
  className,
}: {
  href: string;
  children: React.ReactNode;
  label: string;
  isLocationFooter: boolean;
  target?: string;
  className?: string;
}) => {
  const button = (
    <Link
      href={href}
      {...(target && { target })}
      title={!isLocationFooter ? label : undefined}
      className={cn("hover:opacity-70 hover:shadow", className)}
    >
      <Button
        variant="outline"
        className={cn(
          "text-primary/80 hover:text-primary hover:shadow-md bg-primary/5 rounded-full liquid-glass flex items-center justify-between gap-2",
        )}
      >
        {children}
        {<span className="text-xs hidden sm:block">{label}</span>}
      </Button>
    </Link>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">
          {button}
        </span>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        {label}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
};

export const Socials = ({ location = "hero", className }: { location?: "footer" | "hero", className?: string }) => {
  const isLocationFooter = location === "footer";

  return (
    <div className={cn("flex gap-2 justify-start items-center", className)}>
      {SOCIALS_DATA.map((social) => {
        const isExternal = /^(https?:|mailto:)/.test(social.href);

        return (
          <SocialButton key={social.label} href={social.href} label={social.label} isLocationFooter={isLocationFooter} target={isExternal ? "_blank" : undefined} className="text-primary" >
            <span
              className="w-4 h-4 inline-block bg-current"
              style={{
                maskImage: `url(${social.icon})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
          </SocialButton>
        );
      })}

      {!isLocationFooter && (
        <ToggleThemeButton className="hover:opacity-70 hover:shadow rounded-full liquid-glass" />
      )}
    </div>
  );
};
