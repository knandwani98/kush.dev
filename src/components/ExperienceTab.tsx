"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { EDUCATION_DATA } from "@/data";
import { EXPERIENCE_DATA, EXPERIENCE_TABS } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceProps } from "@/lib/types";
import { cn } from "@/lib/utils";

const TAB_COUNT = EXPERIENCE_TABS.length;
const TAB_DATA: Record<string, ExperienceProps[]> = {
  work: EXPERIENCE_DATA,
  education: EDUCATION_DATA as ExperienceProps[],
};
const INDICATOR_WIDTH = `calc(${100 / TAB_COUNT}% - ${8 / TAB_COUNT}px)`;

const TRIGGER_CLASS = cn(
  "relative z-10 w-full rounded-full hover:text-primary font-normal transition-colors duration-200",
  "data-[state=active]:font-semibold data-[state=active]:text-foreground data-[state=active]:bg-none!"
);

export const ExperienceTab = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState("work");
  const activeIndex = EXPERIENCE_TABS.findIndex((t) => t.value === activeTab);

  return (
    <section className={cn("my-container w-full", className)}>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="relative w-full mx-auto rounded-full overflow-visible p-1">
          <div
            className="absolute left-1 top-1 bottom-1 liquid-glass rounded-full pointer-events-none transition-transform duration-300 ease-apple"
            style={{
              width: INDICATOR_WIDTH,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {EXPERIENCE_TABS.map((tab) => (
            <TabsTrigger key={tab.value} className={TRIGGER_CLASS} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className={cn("rounded-xl mt-4 shadow-xl border border-accent liquid-glass")}>
          {EXPERIENCE_TABS.map((tab) => {
            const data = TAB_DATA[tab.value];
            return (
              <TabsContent key={tab.value} value={tab.value} className="p-0">
                {data.map((item, index) => (
                  <ExperienceCard
                    key={item.title}
                    data={item}
                    isFirstItem={index === 0}
                    isTimeLineVisible={index < data.length - 1}
                  />
                ))}
              </TabsContent>
            );
          })}
        </div>
      </Tabs>
    </section>
  );
};
