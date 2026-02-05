import { getAllActors } from '../../lib/cinema'
import ActorCard from '../../components/ActorCard'

export default function ActorsPage() {
  const actors = getAllActors()
  return (
    <div className="actors">
      <h1>Actores</h1>
      <div className="actor-list">
        {actors.map(actor => (
          <ActorCard key={actor.id} actor={actor} />
        ))}
      </div>
    </div>
  )
}
