import { Layout } from "@/components/Layout";
import { Projects } from "@/components/Projects";
import { PROJECTS_DATA } from "@/data";

const ProjectsPage = () => {
  return (
    <Layout title="my projects.">
      <Projects data={PROJECTS_DATA} />
    </Layout>
  );
};

export default ProjectsPage;
