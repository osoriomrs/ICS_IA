import { useLoaderData, useParams } from "react-router-dom";
import { getProjectById } from "../utils/api.js";

export async function loader({ params }) {
  const project = await getProject(params.projectId);
  if (!project) throw new Response("No encontrado", { status: 404 });
  return { project };
}

export default function ProjectDetailsPage() {
  const { project } = useLoaderData();

  return (
    <div>
      <h1>{project.title}</h1>
      <h2>Tareas</h2>
      <ul>
        {project.tasks.map(t => (
          <li key={t.id}>
            {t.title} {t.completed ? "(Completada)" : "(Incompleta)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
