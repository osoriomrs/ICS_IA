import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { addProject } from "../utils/api";

export function action({ request }) {
  const data = Object.fromEntries(await request.formData());

  if (!data.title || data.title.length < 5) {
    return { error: "El título debe tener al menos 5 caracteres" };
  }

  addProject(data);
  return redirect("/projects");
}

export default function NewProjectPage() {
  const errors = useActionData();
  const navigation = useNavigation();

  return (
    <Form method="post">
      <input name="title" placeholder="Título" />
      <textarea name="description" placeholder="Descripción" />
      {errors && <p>{errors.error}</p>}
      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Guardando..." : "Crear Proyecto"}
      </button>
    </Form>
  );
}
