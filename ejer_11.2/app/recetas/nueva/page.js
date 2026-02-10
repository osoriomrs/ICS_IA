import { createReceta } from "@/lib/recetas";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function NuevaRecetaPage() {
  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    const id = await createReceta(data);
    redirect(`/recetas/${id}`);
  }

  return (
    <form action={handleSubmit} className="form">
      <h1>Crear Nueva Receta</h1>
      <input type="text" name="titulo" placeholder="Título" required />
      <textarea name="descripcion_corta" placeholder="Descripción corta" required />
      <textarea name="ingredientes" placeholder="Ingredientes" required />
      <textarea name="instrucciones" placeholder="Instrucciones" required />
      <input type="text" name="tiempo_coccion" placeholder="Tiempo de cocción" required />
      <button type="submit">Crear Receta</button>
    </form>
  );
}
