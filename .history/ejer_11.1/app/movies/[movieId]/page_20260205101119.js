import Link from "next/link"
import { movies, actors } from "@/app/data/data"

export default async function MovieDetailPage({ params }) {
  const { movieId } = await params

  const movie = movies.find(m => m.id === movieId)

  if (!movie) {
    return <p>No hay información de la película</p>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Año: {movie.year}</p>
      <p>Género: {movie.genre}</p>

      <p>
        Actores:{" "}
        {movie.actors.map((actorId, index) => {
          const actor = actors.find(a => a.id === actorId)
          return (
            <span key={actorId}>
              <Link href={`/actors/${actorId}`}>
                {actor?.name}
              </Link>
              {index < movie.actors.length - 1 && ", "}
            </span>
          )
        })}
      </p>
    </div>
  )
}
