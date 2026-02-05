// app/movies/[movieId]/page.js
import { MOVIES } from '../../../lib/cinema';

export default async function MovieDetailPage({ params }) {
  // Desempaquetar la promesa
  const { movieId } = await params;  // ✅ esto es lo que Next.js espera

  const movie = MOVIES.find(m => m.id === movieId);

  if (!movie) return <p>Película no encontrada</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{movie.title}</h1>
      <p>Año: {movie.year}</p>
      <p>Actores: {movie.actors.join(', ')}</p>
    </div>
  );
}
