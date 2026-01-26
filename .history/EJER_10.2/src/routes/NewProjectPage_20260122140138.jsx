import { Form, useActionData, useNavigation } from "react-router-dom";
import { addProject } from "../utils/api.js";

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  if (!name || name.length < 5) return { error: "El nombre debe tener al menos 5 caracteres" };
  addProject(name);
  return null;
}

export default function NewProjectPage() {
  const data = useActionData();
  const navigation = useNavigation();

  return (
    <Form method="post">
      <label>Nombre Proyecto:</label>
      <input name="name" />
      {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
      <button disabled={navigation.state === "submitting"}>
        {navigation.state === "submitting" ? "Guardando..." : "Crear Proyecto"}
      </button>
    </Form>
  );
}
