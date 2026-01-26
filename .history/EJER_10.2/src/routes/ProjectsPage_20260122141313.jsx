import { getProjects } from "../utils/api.js";
import { useLoaderData } from "react-router-dom";
import ProjectList from "../components/ProjectList.jsx";

export function loader() {
  const projects = getProjects();
  return projects; // ✅ devuelve un array
}

export default function ProjectsPage() {
  const projects = useLoaderData();
  if (!Array.isArray(projects)) return <p>No hay proyectos</p>;
  return <ProjectList projects={projects} />;
}