import ProjectList from "../components/ProjectList.jsx";
import { getProjects } from "../utils/api.js";

export async function loader() {
  const projects = await getProjects();
  return { projects };
}

export default function ProjectsPage({ loaderData }) {
  const { projects } = loaderData || {};
  return (
    <div>
      <h2>Proyectos</h2>
      <ProjectList projects={projects} />
    </div>
  );
}
