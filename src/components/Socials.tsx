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
      className={cn("opacity-70 hover:opacity-100", className)}
    >
      <Button
        variant="outline"
        size={isLocationFooter ? "sm" : "icon"}
        className={cn(
          "text-primary/80 hover:text-primary hover:shadow-md bg-primary/5 rounded-full liquid-glass flex items-center",
          isLocationFooter ? "justify-between gap-2" : "justify-center"
        )}
      >
        {children}
        {isLocationFooter && <span className="text-xs hidden sm:block">{label}</span>}
      </Button>
    </Link>
  );

  if (isLocationFooter) return button;

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
    <div className={cn("flex gap-2 justify-between items-center", isLocationFooter ? "justify-start" : "justify-between", className)}>
      {SOCIALS_DATA.map((social) => (
        <SocialButton key={social.label} href={social.href} label={social.label} isLocationFooter={isLocationFooter} target="_blank" className="text-primary" >
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
      ))}

      {!isLocationFooter && (
        <ToggleThemeButton className="opacity-70 hover:opacity-100 rounded-full liquid-glass" />
      )}
    </div>
  );
};
