import Link from "next/link";
import { getAllRecetas } from "@/lib/recetas";
import "@/styles/recetas.css";

export default async function HomePage() {
  const recetas = await getAllRecetas();

  return (
    <div className="container">
      <h1>Blog de Recetas 🍳</h1>
      <Link href="/recetas/nueva" className="button">Crear Nueva Receta</Link>
      <div className="grid">
        {recetas.map(receta => (
          <Link key={receta.id} href={`/recetas/${receta.id}`} className="card">
            <h3>{receta.titulo}</h3>
            <p>{receta.descripcion_corta}</p>
          </Link>
        ))}
        {recetas.length === 0 && <p>No hay recetas disponibles.</p>}
      </div>
    </div>
  );
}
