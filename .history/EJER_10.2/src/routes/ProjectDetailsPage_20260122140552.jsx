import { useLoaderData, useSubmit, useFetcher, redirect } from "react-router-dom";
import {
  getProjectById,
  deleteProject as apiDeleteProject,
  deleteTask as apiDeleteTask,
  toggleTaskCompletion as apiToggleTask
} from "../utils/api.js";

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  function handleDeleteProject() {
    if (window.confirm("¿Eliminar proyecto?")) {
      submit(
        { projectId: project.id, _method: "DELETE_PROJECT" },
        { method: "post" }
      );
    }
  }

  function handleDeleteTask(taskId) {
    if (window.confirm("¿Eliminar tarea?")) {
      submit(
        { projectId: project.id, taskId, _method: "DELETE_TASK" },
        { method: "post" }
      );
    }
  }

  function handleToggleCompletion(taskId) {
    fetcher.submit(
      { projectId: project.id, taskId, _method: "TOGGLE_TASK" },
      { method: "post" }
    );
  }

  return (
    <div>
      <h2>{project.name}</h2>
      <button onClick={handleDeleteProject}>Eliminar Proyecto</button>

      <h3>Tareas</h3>
      <ul>
        {project.tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
              {task.title}
            </span>
            <button onClick={() => handleToggleCompletion(task.id)}>
              {task.completed ? "Marcar Incompleta" : "Marcar Completada"}
            </button>
            <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function loader({ params }) {
  const project = await getProjectById(params.projectId);
  if (!project) throw new Response("Not Found", { status: 404 });
  return project;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const method = formData.get("_method");

  if (method === "DELETE_PROJECT") {
    await apiDeleteProject(params.projectId);
    return redirect("/projects");
  }

  if (method === "DELETE_TASK") {
    const taskId = formData.get("taskId");
    await apiDeleteTask(params.projectId, taskId);
    return null;
  }

  if (method === "TOGGLE_TASK") {
    const taskId = formData.get("taskId");
    await apiToggleTask(params.projectId, taskId);
    return null;
  }

  return null;
}
