import { useFetcher, useSubmit } from "react-router-dom";

export default function TaskList({ tasks }) {
  const fetcher = useFetcher();
  const submit = useSubmit();

  function deleteTaskHandler(id) {
    if (window.confirm("¿Eliminar tarea?")) {
      submit(null, { method: "delete", action: `task/${id}` });
    }
  }

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <fetcher.Form method="post" action={`task/${task.id}`}>
            <input type="checkbox" checked={task.completed} readOnly />
            <button>Toggle</button>
          </fetcher.Form>

          {task.title}

          <button onClick={() => deleteTaskHandler(task.id)}>
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
}
