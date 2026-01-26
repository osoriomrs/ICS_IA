import { Form, useActionData, useNavigation } from "react-router-dom";
import { addTask } from "../utils/api.js";

export async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get("title");
  if (!title) return { error: "El título no puede estar vacío" };
  addTask(params.projectId, title);
  return null;
}

export default function NewTaskPage() {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form method="post">
      <label>Título Tarea:</label>
      <input name="title" />
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Guardando..." : "Crear Tarea"}
      </button>
    </Form>
  );
}
