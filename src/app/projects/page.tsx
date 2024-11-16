import { Projects } from "@/components/Projects";
import { PROJECTS_DATA } from "@/lib/data";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className="my-container pt-8">
      <h1 className="font-bold text-3xl sm:text-5xl whitespace-nowrap mb-8">
        my projects.
      </h1>

      {/* Projects */}
      <Projects data={PROJECTS_DATA} />
    </div>
  );
};

export default ProjectsPage;
