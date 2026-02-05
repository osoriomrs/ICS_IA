import Link from 'next/link';
import { getAllMovies } from '@/lib/cinema';

export default function MoviesPage() {
  const movies = getAllMovies();
  return (
    <section>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} width={150} />
              <p>{movie.title} ({movie.year})</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
