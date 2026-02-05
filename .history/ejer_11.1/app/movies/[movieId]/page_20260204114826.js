// app/movies/[movieId]/page.js
import { MOVIES } from '../../../lib/cinema';

export default async function MovieDetailPage({ params }) {
  const movieId = params.movieId;
  const movie = MOVIES.find(m => m.id === movieId);

  if (!movie) {
    return <p>Película no encontrada</p>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: '200px', borderRadius: '8px' }} />
      <p>Año: {movie.year}</p>
      <p>Actores: {movie.actors.join(', ')}</p>
    </div>
  );
}
