import { getActorById, getFilmographyByActorId } from '../../../lib/cinema'
import Link from 'next/link'

export default function ActorDetailPage({ params }) {
  const actor = getActorById(params.actorId)
  const films = getFilmographyByActorId(params.actorId)

  return (
    <div className="actor-detail">
      <h1>{actor.name}</h1>
      <p>Año de nacimiento: {actor.birthYear}</p>
      <p>{actor.bio}</p>
      <h2>Filmografía</h2>
      <ul>
        {films.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
