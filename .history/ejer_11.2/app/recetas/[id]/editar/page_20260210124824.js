import { getRecetaById, updateReceta } from "@/lib/recetas";
import { redirect, revalidatePath } from "next/navigation";

export default async function EditarRecetaPage({ params }) {
  const receta = await getRecetaById(params.id);

  if (!receta) return <p>Receta no encontrada.</p>;

  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    await updateReceta(params.id, data);
    revalidatePath(`/`);
    revalidatePath(`/recetas/${params.id}`);
    redirect(`/recetas/${params.id}`);
  }

  return (
    <form action={handleSubmit} className="form">
      <h1>Editar Receta</h1>
      <input type="text" name="titulo" defaultValue={receta.titulo} required />
      <textarea name="descripcion_corta" defaultValue={receta.descripcion_corta} required />
      <textarea name="ingredientes" defaultValue={receta.ingredientes} required />
      <textarea name="instrucciones" defaultValue={receta.instrucciones} required />
      <input type="text" name="tiempo_coccion" defaultValue={receta.tiempo_coccion} required />
      <button type="submit">Actualizar Receta</button>
    </form>
  );
}
