import { getMovieById, getCastByMovieId } from '../../../lib/cinema'
import Link from 'next/link'

export default function MovieDetailPage({ params }) {
  const movie = getMovieById(params.movieId)
  const cast = getCastByMovieId(params.movieId)

  return (
    <div className="movie-detail">
      <h1>{movie.title} ({movie.year})</h1>
      <p>Director: {movie.director}</p>
      <p>{movie.synopsis}</p>
      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>{actor.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
