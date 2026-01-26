import { useLoaderData, useSubmit, useFetcher } from "react-router-dom";
import { getProject, deleteProject, deleteTask, toggleTaskCompletion } from "../utils/api.js";

export default function ProjectDetailsPage() {
  const project = useLoaderData();
  const submit = useSubmit();
  const fetcher = useFetcher();

  function handleDeleteProject() {
    if (window.confirm("¿Eliminar proyecto?")) {
      submit(
        { projectId: project.id, _method: "DELETE" },
        { action: `/projects/${project.id}`, method: "post" }
      );
    }
  }

  function handleDeleteTask(taskId) {
    if (window.confirm("¿Eliminar tarea?")) {
      submit(
        { projectId: project.id, taskId, _method: "DELETE_TASK" },
        { action: `/projects/${project.id}`, method: "post" }
      );
    }
  }

  function handleToggleCompletion(taskId) {
    fetcher.submit(
      { projectId: project.id, taskId, _method: "TOGGLE_TASK" },
      { action: `/projects/${project.id}`, method: "post" }
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
