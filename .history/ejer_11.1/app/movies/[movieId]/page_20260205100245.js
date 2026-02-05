import Link from "next/link"

const movies = [
  {
    id: "inception",
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    actors: ["leonardo-dicaprio", "joseph-gordon-levitt"]
  },
  {
    id: "titanic",
    title: "Titanic",
    year: 1997,
    genre: "Drama",
    actors: ["leonardo-dicaprio"]
  }
]

const actors = [
  {
    id: "leonardo-dicaprio",
    name: "Leonardo DiCaprio"
  },
  {
    id: "joseph-gordon-levitt",
    name: "Joseph Gordon-Levitt"
  }
]

export default async function MovieDetailPage({ params }) {
  const { movieId } = params

  const movie = movies.find(m => m.id === movieId)

  if (!movie) {
    return <p>No se encontró la película</p>
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Año: {movie.year}</p>
      <p>Género: {movie.genre}</p>

      <p>
        Actores:{" "}
        {movie.actors && movie.actors.length > 0 ? (
          movie.actors.map((actorId, index) => {
            const actor = actors.find(a => a.id === actorId)
            return (
              <span key={actorId}>
                <Link href={`/actors/${actorId}`}>
                  {actor?.name || actorId}
                </Link>
                {index < movie.actors.length - 1 && ", "}
              </span>
            )
          })
        ) : (
          "No hay actores disponibles"
        )}
      </p>
    </div>
  )
}
