import { 
  getRecetaById, 
  getComentariosByRecetaId, 
  addComentario, 
  deleteReceta 
} from "@/lib/recetas";
import Link from "next/link";
import { redirect } from "next/navigation";
import "@/styles/recetas.css";

export default async function RecetaDetailPage({ params }) {
  const { id } = await params; // ⚡ Unwrap de la promesa

  const receta = await getRecetaById(id);
  const comentarios = await getComentariosByRecetaId(id);

  if (!receta) return <p>Receta no encontrada.</p>;

  // Acción de servidor para agregar un comentario
  async function handleComentario(formData) {
    "use server";
    const autor = formData.get("autor");
    const texto = formData.get("texto");
    await addComentario(id, autor, texto);
    redirect(`/recetas/${id}`);
  }

  // Acción de servidor para borrar la receta
  async function handleDelete() {
    "use server";
    await deleteReceta(id);
    redirect("/");
  }

  return (
    <div className="container">
      <h1>{receta.titulo}</h1>
      <p><strong>Descripción:</strong> {receta.descripcion_corta}</p>
      <p><strong>Ingredientes:</strong> {receta.ingredientes}</p>
      <p><strong>Instrucciones:</strong> {receta.instrucciones}</p>
      <p><strong>Tiempo de cocción:</strong> {receta.tiempo_coccion} minutos</p>

      <div className="actions">
        <Link href={`/recetas/${id}/editar`} className="button">Editar Receta</Link>
        <form action={handleDelete} style={{ display: 'inline' }}>
          <button type="submit" className="button danger">Borrar Receta</button>
        </form>
      </div>

      <h2>Comentarios</h2>
      <form action={handleComentario} className="form">
        <input type="text" name="autor" placeholder="Tu nombre" required />
        <textarea name="texto" placeholder="Escribe un comentario" required />
        <button type="submit">Agregar Comentario</button>
      </form>

      <div className="grid">
        {comentarios.length > 0 ? comentarios.map(c => (
          <div key={c.id} className="card">
            <p><strong>{c.autor}</strong>: {c.texto}</p>
          </div>
        )) : <p>No hay comentarios aún.</p>}
      </div>
    </div>
  );
}
