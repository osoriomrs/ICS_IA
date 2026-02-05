import Link from "next/link";
import { getAllMovies } from "@/lib/cinema";
import "@/styles/movies.css";

export default function MoviesPage() {
  const movies = getAllMovies();
  return (
    <div className="container">
      <h1>Películas</h1>
      <div className="grid">
        {movies.map(movie => (
          <Link key={movie.id} href={`/movies/${movie.id}`} className="card">
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
