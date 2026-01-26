import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { addTask } from "../utils/api.js";

export async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");
  const projectId = params.projectId;

  const errors = {};
  if (!title || title.trim() === "") errors.title = "El título no puede estar vacío.";
  if (Object.keys(errors).length) return errors;

  addTask(projectId, title);
  return redirect(`/projects/${projectId}`);
}

export default function NewTaskPage() {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <Form method="post">
        <label>Título de la tarea:</label>
        <input type="text" name="title" />
        {errors?.title && <p style={{ color: "red" }}>{errors.title}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Añadir Tarea"}
        </button>
      </Form>
    </div>
  );
}
