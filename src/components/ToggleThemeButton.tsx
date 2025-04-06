"use client";

import * as React from "react";
import { Zap, ZapOff } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  const lightSwitchSound = new Audio("./sound/light-switch.mp3");

  return (
    <Button
      onClick={() => {
        lightSwitchSound.play();
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      variant="outline"
      size="icon"
    >
      <ZapOff className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Zap className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
