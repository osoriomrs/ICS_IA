import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { addTaskToProject } from "../utils/api.js";

export async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");

  const errors = {};
  if (!title || title.trim() === "") {
    errors.title = "El título de la tarea no puede estar vacío";
    return errors;
  }

  await addTaskToProject(params.projectId, { title, completed: false });
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  const errors = useActionData();
  const navigation = useNavigation();

  return (
    <div>
      <h1>Nueva Tarea</h1>
      <Form method="post">
        <label>
          Título de la tarea:{" "}
          <input type="text" name="title" />
        </label>
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Guardando..." : "Añadir Tarea"}
        </button>
      </Form>
      {errors?.title && <p style={{ color: "red" }}>{errors.title}</p>}
    </div>
  );
}
