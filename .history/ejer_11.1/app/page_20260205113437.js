import Link from "next/link"
import { MOVIES, ACTORS } from "../lib/cinema"

export default function HomePage() {
  return (
    <div>
      <h1>Películas</h1>
      <ul>
        {MOVIES.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>

      <h1>Actores</h1>
      <ul>
        {ACTORS.map(actor => (
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
