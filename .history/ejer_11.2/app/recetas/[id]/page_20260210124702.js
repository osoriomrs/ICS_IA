import { getRecetaById, getComentariosByRecetaId, addComentario, deleteReceta } from "@/lib/recetas";
import Link from "next/link";
import { redirect } from "next/navigation";
import "@/styles/recetas.css";

export default async function RecetaDetailPage({ params }) {
  const receta = await getRecetaById(params.id);
  const comentarios = await getComentariosByRecetaId(params.id);

  if (!receta) return <p>Receta no encontrada.</p>;

  async function handleComentario(formData) {
    "use server";
    const autor = formData.get("autor");
    const texto = formData.get("texto");
    await addComentario(params.id, autor, texto);
    redirect(`/recetas/${params.id}`);
  }

  async function handleDelete() {
    "use server";
    await deleteReceta(params.id);
    redirect("/");
  }

  return (
    <div className="container">
      <h1>{receta.titulo}</h1>
      <p><strong>Descripción:</strong> {receta.descripcion_corta}</p>
      <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
      <p><strong>Instrucciones:</strong> {receta.instrucciones}</p>
      <p><strong>Tiempo de cocción:</strong> {receta.tiempo_coccion}</p>
      <Link href={`/recetas/${params.id}/editar`} className="button">Editar Receta</Link>
      <form action={handleDelete}>
        <button type="submit" className="button danger">Borrar Receta</button>
      </form>

      <h2>Comentarios</h2>
      <form action={handleComentario} className="form">
        <input type="text" name="autor" placeholder="Tu nombre" required />
        <textarea name="texto" placeholder="Escribe un comentario" required />
        <button type="submit">Agregar Comentario</button>
      </form>
      <div className="grid">
        {comentarios.map(c => (
          <div key={c.id} className="card">
            <p><strong>{c.autor}</strong>: {c.texto}</p>
          </div>
        ))}
        {comentarios.length === 0 && <p>No hay comentarios aún.</p>}
      </div>
    </div>
  );
}
