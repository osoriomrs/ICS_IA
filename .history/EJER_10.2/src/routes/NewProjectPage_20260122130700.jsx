import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { addProject } from "../utils/api";

export async function action({ request }) {
  const data = await request.formData();
  const name = data.get("name");

  if (!name || name.length < 5) {
    return { error: "Mínimo 5 caracteres" };
  }

  addProject(name);
  return redirect("/projects");
}

export default function NewProjectPage() {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form method="post">
      <input name="name" placeholder="Nombre del proyecto" />
      {data?.error && <p>{data.error}</p>}
      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Guardando..." : "Guardar"}
      </button>
    </Form>
  );
}
