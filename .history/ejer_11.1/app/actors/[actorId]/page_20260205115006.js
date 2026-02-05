import { getActorById, getFilmographyByActorId } from "@/lib/cinema";
import Link from "next/link";
import "@/styles/actors.css";

export default async function ActorDetailPage({ params }) {
  const { actorId } = await params; 

  const actor = getActorById(actorId);
  const filmography = getFilmographyByActorId(actorId);

  if (!actor) return <p>No se encontró información del actor.</p>;

  return (
    <div className="container">
      <h1>{actor.name} ({actor.birthYear})</h1>
      <img src={actor.photo} alt={actor.name} className="poster-large" />
      <p>{actor.bio}</p>

      <h2>Filmografía</h2>
      <div className="grid">
        {filmography.length > 0 ? (
          filmography.map(movie => (
            <Link key={movie.id} href={`/movies/${movie.id}`} className="card">
              <img src={movie.poster} alt={movie.title} />
              <h4>{movie.title}</h4>
              <p>{movie.character}</p>
            </Link>
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </div>
    </div>
  );
}
