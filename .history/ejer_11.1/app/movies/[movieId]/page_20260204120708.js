import { MOVIES } from '../../../lib/cinema';

export default async function MovieDetailPage({ params }) {
  const { movieId } = await params;

  const movie = MOVIES.find(m => m.id === movieId);

  if (!movie) {
    return <p>Película no encontrada</p>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{movie.title}</h1>
      <p>Año: {movie.year}</p>
      <p>
        Actores:{' '}
        {movie.actors && movie.actors.length > 0
          ? movie.actors.join(', ')
          : 'No hay actores disponibles'}
      </p>
    </div>
  );
}
