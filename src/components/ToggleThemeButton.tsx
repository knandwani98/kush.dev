"use client";

import { useEffect, useRef } from "react";
import { Zap, ZapOff } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/sound/light-switch.mp3");
    audioRef.current.preload = "auto";
    audioRef.current.load();
  }, []);

  const handleToggle = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      audioRef.current.play().catch(() => {
        console.log("Failed to play audio");
      });
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={handleToggle} variant="outline" size="icon">
      <ZapOff className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Zap className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
