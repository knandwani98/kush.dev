import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { EDUCATION_DATA } from "@/data";
import { EXPERIENCE_DATA } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";
import { ExperienceProps } from "@/lib/types";

export const ExperienceTab = () => {
  return (
    <section className="my-container w-full">
      <Tabs defaultValue="work">
        <TabsList className="w-full mx-auto">
          <TabsTrigger className="w-full" value="work">
            Work
          </TabsTrigger>
          <TabsTrigger className="w-full" value="education">
            Education
          </TabsTrigger>
        </TabsList>

        <div className="border border-accent rounded-xl mt-4 shadow-xl">
          <TabsContent value="work">
            {EXPERIENCE_DATA.map((data, index) => (
              <ExperienceCard
                key={data.title}
                data={data}
                isFirstItem={index === 0}
                isTimeLineVisible={
                  EXPERIENCE_DATA.length > 1 &&
                  index !== EXPERIENCE_DATA.length - 1
                }
              />
            ))}
          </TabsContent>

          <TabsContent value="education">
            {EDUCATION_DATA.map((data, index) => (
              <ExperienceCard
                key={data.title}
                data={data as ExperienceProps}
                isFirstItem={index === 0}
                isTimeLineVisible={
                  EDUCATION_DATA.length > 1 &&
                  index !== EDUCATION_DATA.length - 1
                }
              />
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};
