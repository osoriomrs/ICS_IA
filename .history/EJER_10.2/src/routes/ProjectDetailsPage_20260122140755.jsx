import { useLoaderData, useFetcher, useSubmit, Form, redirect } from "react-router-dom";
import { getProject, deleteProject, deleteTask, toggleTaskCompletion } from "../utils/api.js";

export async function loader({ params }) {
  const project = getProject(params.projectId);
  if (!project) throw new Response("Not Found", { status: 404 });
  return project;
}

export async function action({ params, request }) {
  const formData = await request.formData();
  const _method = formData.get("_method");
  const projectId = params.projectId;

  if (_method === "delete") {
    deleteProject(projectId);
    return redirect("/projects");
  }

  if (_method === "delete-task") {
    const taskId = formData.get("taskId");
    deleteTask(projectId, taskId);
  }

  if (_method === "toggle-task") {
    const taskId = formData.get("taskId");
    toggleTaskCompletion(projectId, taskId);
  }

  return null;
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  return (
    <div>
      <h2>{project.name}</h2>
      <Form method="post" onSubmit={e => {
        if (!window.confirm("¿Eliminar proyecto?")) e.preventDefault();
      }}>
        <button type="submit" name="_method" value="delete">Eliminar Proyecto</button>
      </Form>

      <h3>Tareas</h3>
      <ul>
        {project.tasks.map(task => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.title}</span>
            <fetcher.Form method="post">
              <button type="submit" name="_method" value="toggle-task">
                <input type="hidden" name="taskId" value={task.id} />
                {task.completed ? "Marcar incompleta" : "Marcar completa"}
              </button>
            </fetcher.Form>
            <Form method="post" onSubmit={e => {
              if (!window.confirm("¿Eliminar tarea?")) e.preventDefault();
            }}>
              <button type="submit" name="_method" value="delete-task">
                <input type="hidden" name="taskId" value={task.id} />
                Eliminar
              </button>
            </Form>
          </li>
        ))}
      </ul>
    </div>
  );
}
