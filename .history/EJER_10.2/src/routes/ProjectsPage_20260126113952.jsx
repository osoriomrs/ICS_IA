import { useLoaderData } from "react-router-dom";
import { getProjects } from "../utils/api";
import ProjectList from "../components/ProjectList";

export function loader() {
  return getProjects();
}

export default function ProjectsPage() {
  const projects = useLoaderData();
  return <ProjectList projects={projects} />;
}
