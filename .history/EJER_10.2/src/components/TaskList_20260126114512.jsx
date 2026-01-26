import { useFetcher, useSubmit } from "react-router-dom";

export default function TaskList({ project }) {
  const fetcher = useFetcher();
  const submit = useSubmit();

  return (
    <ul>
      {project.tasks.map(task => (
        <li key={task.id}>
          {task.title} {task.completed && "✔"}
          <fetcher.Form method="patch">
            <input type="hidden" name="taskId" value={task.id} />
            <button>Toggle</button>
          </fetcher.Form>
          <button
            onClick={() =>
              window.confirm("¿Eliminar tarea?") &&
              submit(
                { taskId: task.id },
                { method: "delete" }
              )
            }
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
