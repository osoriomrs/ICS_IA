import { Link, useLoaderData } from "react-router-dom";
import { getProjects } from "../utils/api.js";

export async function loader() {
  const projects = await getProjects();
  return { projects };
}

export default function ProjectsPage() {
  const { projects } = useLoaderData();
  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
