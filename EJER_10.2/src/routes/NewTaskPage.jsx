import { Form, redirect, useParams } from "react-router-dom";
import { addTaskToProject } from "../utils/api";

export async function action({ request, params }) {
  const data = Object.fromEntries(await request.formData());

  if (!data.title) {
    return null;
  }

  addTaskToProject(params.projectId, data.title);
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  const { projectId } = useParams();

  return (
    <Form method="post">
      <input name="title" placeholder="Nueva tarea" />
      <button>Añadir</button>
    </Form>
  );
}
