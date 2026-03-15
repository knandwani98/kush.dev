"use client";

import { useEffect, useRef } from "react";
import { flushSync } from "react-dom";
import { Zap, ZapOff } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipArrow, TooltipTrigger } from "./ui/tooltip";

export function ToggleThemeButton({ className, size = 16 }: { className?: string, size?: number }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/light-switch.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.load();
  }, []);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current.play().catch(() => {
        console.log("Failed to play audio");
      });
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    document.documentElement.style.setProperty("--toggle-x", `${x}px`);
    document.documentElement.style.setProperty("--toggle-y", `${y}px`);

    const switchTheme = () => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    };

    if (document.startViewTransition) {
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  const tooltipLabel = resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  const button = (
    <Button onClick={handleToggle} variant="outline" size="icon" className={className}>
      <ZapOff size={size as number} className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 opacity-70 hover:opacity-100" />
      <Zap size={size as number} className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 opacity-70 hover:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-flex">{button}</span>
      </TooltipTrigger>
      <TooltipContent sideOffset={8}>
        {tooltipLabel}
        <TooltipArrow />
      </TooltipContent>
    </Tooltip>
  );
}
