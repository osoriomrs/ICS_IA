import { useLoaderData, Link, redirect } from "react-router-dom";
import {
  getProject,
  getTasksByProject,
  deleteProject,
  toggleTask,
  deleteTask
} from "../utils/api";
import TaskList from "../components/TaskList";

export function loader({ params }) {
  return {
    project: getProject(params.projectId),
    tasks: getTasksByProject(params.projectId)
  };
}

export function action({ request, params }) {
  if (request.method === "DELETE") {
    deleteProject(params.projectId);
    return redirect("/projects");
  }
}

export function taskAction({ params, request }) {
  if (request.method === "POST") toggleTask(params.taskId);
  if (request.method === "DELETE") deleteTask(params.taskId);
  return null;
}

export default function ProjectDetailsPage() {
  const { project, tasks } = useLoaderData();

  return (
    <>
      <h2>{project.name}</h2>
      <Link to="new-task">Nueva Tarea</Link>
      <TaskList tasks={tasks} />

      <form method="delete">
        <button>Eliminar Proyecto</button>
      </form>
    </>
  );
}
