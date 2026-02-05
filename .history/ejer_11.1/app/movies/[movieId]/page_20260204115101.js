import { use } from 'react';
import { getMovieById } from '../../../lib/api';

export default function MovieDetailPage({ params }) {
  const movieId = use(params).movieId;
  const movie = use(getMovieById(movieId));

  if (!movie) return <p>Película no encontrada</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
}
