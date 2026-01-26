import { useLoaderData, useFetcher, useSubmit, Form } from "react-router-dom";
import { getProjectById } from "../utils/api.js";

export async function loader({ params }) {
  const project = await getProjectById(params.projectId);
  if (!project) throw new Response("Not Found", { status: 404 });
  return project;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const type = formData.get("_action");
  const taskId = formData.get("taskId");
  const projectId = params.projectId;

  if (type === "deleteTask") {
    const success = deleteTask(projectId, taskId);
    return success ? { message: "Tarea eliminada" } : null;
  }

  if (type === "toggleTask") {
    const success = toggleTaskCompletion(projectId, taskId);
    return success ? { message: "Tarea actualizada" } : null;
  }
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const fetcher = useFetcher();
  const submit = useSubmit();

  const handleDeleteTask = (taskId) => {
    if (window.confirm("¿Eliminar esta tarea?")) {
      submit({ _action: "deleteTask", taskId }, { method: "post" });
    }
  };

  const handleToggleTask = (taskId) => {
    submit({ _action: "toggleTask", taskId }, { method: "post" });
  };

  return (
    <div>
      <h2>{project.name}</h2>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            <fetcher.Form method="post">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleTask(task.id)}
              />
              <span style={{ marginLeft: "8px" }}>{task.title}</span>
            </fetcher.Form>
            <button
              style={{ marginLeft: "12px" }}
              onClick={() => handleDeleteTask(task.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
