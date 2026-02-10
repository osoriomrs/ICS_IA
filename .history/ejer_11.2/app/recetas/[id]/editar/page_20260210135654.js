import { getRecetaById, updateReceta } from "@/lib/recetas";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function EditarRecetaPage({ params }) {
  // params ya es un objeto normal, no usar await
  const { id } = params;

  const receta = await getRecetaById(id);

  if (!receta) return <p>Receta no encontrada.</p>;

  async function handleSubmit(formData) {
    "use server";
    const data = Object.fromEntries(formData);
    await updateReceta(id, data);
    revalidatePath(`/`); // revalida listado principal
    revalidatePath(`/recetas/${id}`); // revalida detalle
    redirect(`/recetas/${id}`); // navega al detalle
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
