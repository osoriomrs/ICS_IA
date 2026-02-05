import Link from "next/link"
import { movies, actors } from "./data/data"

export default function HomePage() {
  return (
    <div>
      <h1>🎬 Películas</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1>🎭 Actores</h1>
      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              {actor.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
