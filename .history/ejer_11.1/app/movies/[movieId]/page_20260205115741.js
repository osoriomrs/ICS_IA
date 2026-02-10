import { getMovieById, getCastByMovieId } from "@/lib/cinema";
import Link from "next/link";
import "@/styles/movies.css";

export default async function MovieDetailPage({ params }) {
  const { movieId } = await params;

  const movie = getMovieById(movieId);
  const cast = getCastByMovieId(movieId);

  if (!movie) return <p>No se encontró la película.</p>;

  return (
    <div className="container">
      <h1>{movie.title} ({movie.year})</h1>
      <img src={movie.poster} alt={movie.title} className="poster-large" />
      <p><strong>Director:</strong> {movie.director}</p>
      <p>{movie.synopsis}</p>

      <h2>Reparto</h2>
      <div className="grid">
        {cast.length > 0 ? (
          cast.map(actor => (
            <Link key={actor.id} href={`/actors/${actor.id}`} className="card">
              <img src={actor.photo} alt={actor.name} />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </Link>
          ))
        ) : (
          <p>No hay actores disponibles.</p>
        )}
      </div>
    </div>
  );
}
