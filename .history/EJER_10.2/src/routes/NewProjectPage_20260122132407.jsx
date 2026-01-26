import { Form, useActionData, useNavigation } from "react-router-dom";
import { createProject } from "../utils/api.js";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");

  if (!name || name.trim().length < 5) {
    return { error: "El nombre del proyecto debe tener al menos 5 caracteres" };
  }

  await createProject({ name });
  return null;
}

export default function NewProjectPage() {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <div>
      <h2>Nuevo Proyecto</h2>
      <Form method="post">
        <label>
          Nombre del proyecto:
          <input type="text" name="name" />
        </label>
        {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
        <button type="submit" disabled={navigation.state === "submitting"}>
          {navigation.state === "submitting" ? "Guardando..." : "Crear Proyecto"}
        </button>
      </Form>
    </div>
  );
}
