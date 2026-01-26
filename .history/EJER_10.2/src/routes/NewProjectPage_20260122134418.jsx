import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { addProject } from "../utils/api.js";

export async function action({ request }) {
  const formData = await request.formData();
  const title = formData.get("title");

  const errors = {};
  if (!title || title.trim().length < 5) {
    errors.title = "El nombre debe tener al menos 5 caracteres";
    return errors;
  }

  await addProject({ title });
  return redirect("/projects");
}

export default function NewProjectPage() {
  const errors = useActionData();
  const navigation = useNavigation();

  return (
    <div>
      <h1>Nuevo Proyecto</h1>
      <Form method="post">
        <label>
          Nombre del proyecto:{" "}
          <input type="text" name="title" />
        </label>
        <button disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Guardando..." : "Crear Proyecto"}
        </button>
      </Form>
      {errors?.title && <p style={{ color: "red" }}>{errors.title}</p>}
    </div>
  );
}
