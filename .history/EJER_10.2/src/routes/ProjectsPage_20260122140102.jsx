import { getProjects } from "../utils/api.js";
import ProjectList from "../components/ProjectList.jsx";

export async function loader() {
  return getProjects();
}

export default function ProjectsPage() {
  const projects = loader();
  return <ProjectList projects={projects} />;
}
