import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { EDUCATION_DATA, EXPERIENCE_DATA } from "@/lib/data";
import { ExperienceCard } from "./ExperienceCard";

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

        <div className="border border-accent rounded-xl mt-4 px-12 shadow-xl">
          <TabsContent value="work">
            {EXPERIENCE_DATA.map((data) => (
              <ExperienceCard key={data.title} data={data} />
            ))}
          </TabsContent>

          <TabsContent value="education">
            {EDUCATION_DATA.map((data) => (
              <ExperienceCard key={data.title} data={data} />
            ))}
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
};
