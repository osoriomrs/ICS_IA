// app/actors/[actorId]/page.js
import { ACTORS } from '../../../lib/cinema';

export default function ActorDetailPage({ params }) {
  const { actorId } = params; // params viene de Next.js
  const actor = ACTORS.find(a => a.id === actorId);

  if (!actor) {
    return <p>Actor no encontrado</p>;
  }

  return (
    <div>
      <h1>{actor.name}</h1>
      <img src={actor.photo} alt={actor.name} />
    </div>
  );
}
