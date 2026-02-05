import Link from "next/link"
import { actors, movies } from "@/app/data/data"

export default async function ActorDetailPage({ params }) {
  const { actorId } = await params

  const actor = actors.find(a => a.id === actorId)

  if (!actor) {
    return <p>No hay información del actor</p>
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <p>Edad: {actor.age}</p>

      <p>
        Películas:{" "}
        {actor.movies.map((movieId, index) => {
          const movie = movies.find(m => m.id === movieId)
          return (
            <span key={movieId}>
              <Link href={`/movies/${movieId}`}>
                {movie?.title}
              </Link>
              {index < actor.movies.length - 1 && ", "}
            </span>
          )
        })}
      </p>
    </div>
  )
}
