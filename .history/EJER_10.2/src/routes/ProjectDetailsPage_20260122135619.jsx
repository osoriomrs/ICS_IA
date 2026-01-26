import { useLoaderData, useSubmit, Form } from "react-router-dom";
import { getProjectById, addTask, toggleTaskCompletion, deleteTask } from "../utils/api.js";

export async function loader({ params }) {
  const project = await getProjectById(params.projectId);
  if (!project) throw new Response("Not Found", { status: 404 });
  return project;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const type = formData.get("_action");
  const projectId = params.projectId;
  const taskId = formData.get("taskId");
  const title = formData.get("title");

  if (type === "addTask") {
    if (!title || title.trim() === "") {
      return { error: "El título no puede estar vacío" };
    }
    addTask(projectId, title);
    return { message: "Tarea añadida" };
  }

  if (type === "deleteTask") {
    deleteTask(projectId, taskId);
    return { message: "Tarea eliminada" };
  }

  if (type === "toggleTask") {
    toggleTaskCompletion(projectId, taskId);
    return { message: "Tarea actualizada" };
  }
}

export default function ProjectDetailsPage() {
  const project = useLoaderData();
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

      <h3>Tareas</h3>
      <ul>
        {project.tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "8px" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            <span style={{ marginLeft: "8px" }}>{task.title}</span>
            <button style={{ marginLeft: "12px" }} onClick={() => handleDeleteTask(task.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3>Añadir nueva tarea</h3>
      <Form method="post">
        <input type="hidden" name="_action" value="addTask" />
        <input type="text" name="title" placeholder="Título de la tarea" />
        <button type="submit" style={{ marginLeft: "8px" }}>
          Añadir tarea
        </button>
      </Form>
    </div>
  );
}
