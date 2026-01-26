import { Form, useActionData, useNavigation, redirect } from "react-router-dom";
import { addProject } from "../utils/api.js";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");

  const errors = {};
  if (!name || name.length < 5) errors.name = "El nombre debe tener al menos 5 caracteres.";
  if (Object.keys(errors).length) return errors;

  addProject(name);
  return redirect("/projects");
}

export default function NewProjectPage() {
  const errors = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div>
      <h2>Nuevo Proyecto</h2>
      <Form method="post">
        <label>Nombre del proyecto:</label>
        <input type="text" name="name" />
        {errors?.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Guardando..." : "Crear Proyecto"}
        </button>
      </Form>
    </div>
  );
}
