import { useLoaderData, redirect, useSubmit } from "react-router-dom";
import {
  getProjectById,
  deleteProject,
  toggleTask,
  deleteTask
} from "../utils/api";
import TaskList from "../components/TaskList";

export function loader({ params }) {
  return getProjectById(params.projectId);
}

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());

  if (request.method === "DELETE") {
    if (data.taskId) {
      deleteTask(params.projectId, data.taskId);
      return null;
    }
    deleteProject(params.projectId);
    return redirect("/projects");
  }

  if (request.method === "PATCH") {
    toggleTask(params.projectId, data.taskId);
    return null;
  }
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const submit = useSubmit();

  return (
    <>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <button
        onClick={() =>
          window.confirm("¿Eliminar proyecto?") &&
          submit(null, { method: "delete" })
        }
      >
        Eliminar Proyecto
      </button>

      <button onClick={() => submit(null, { action: "new-task" })}>
        Añadir Tarea
      </button>

      <TaskList project={project} />
    </>
  );
}
