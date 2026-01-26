import { Form, redirect } from "react-router-dom";
import { addTask } from "../utils/api";

export function action({ request, params }) {
  const data = await request.formData();
  const title = data.get("title");

  if (!title) return null;

  addTask(params.projectId, title);
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  return (
    <Form method="post">
      <input name="title" placeholder="Nueva tarea" />
      <button>Añadir</button>
    </Form>
  );
}
