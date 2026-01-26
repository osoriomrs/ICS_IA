import { useLoaderData, useFetcher, useSubmit } from "react-router-dom";
import { getProject, deleteProject, deleteTask, toggleTaskCompletion } from "../utils/api.js";

export async function loader({ params }) {
  return getProject(params.projectId);
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const actionType = formData.get("action");
  if (actionType === "delete-project") {
    deleteProject(params.projectId);
    return null;
  }
  if (actionType === "delete-task") {
    deleteTask(params.projectId, formData.get("taskId"));
    return null;
  }
  if (actionType === "toggle-task") {
    toggleTaskCompletion(params.projectId, formData.get("taskId"));
    return null;
  }
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  if (!project) return <p>Proyecto no encontrado</p>;

  return (
    <div>
      <h2>{project.name}</h2>
      <button
        onClick={() => submit({ action: "delete-project" }, { method: "post" })}
      >
        Eliminar Proyecto
      </button>
      <ul>
        {project.tasks.map(task => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() =>
                fetcher.submit(
                  { action: "toggle-task", taskId: task.id },
                  { method: "post" }
                )
              }
            />
            {task.title}
            <button
              onClick={() => {
                if (window.confirm("¿Eliminar tarea?")) {
                  submit(
                    { action: "delete-task", taskId: task.id },
                    { method: "post" }
                  );
                }
              }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <Link to={`/projects/${project.id}/new-task`}>Añadir Tarea</Link>
    </div>
  );
}
