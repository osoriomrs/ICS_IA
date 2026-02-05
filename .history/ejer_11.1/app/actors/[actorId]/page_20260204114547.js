// app/actors/[actorId]/page.js
import { ACTORS } from '../../../lib/cinema';

export default async function ActorDetailPage({ params }) {
  // params es un objeto directo, pero si necesitas datos async, la función debe ser async
  const actorId = params.actorId; 
  const actor = ACTORS.find(a => a.id === actorId);

  if (!actor) {
    return <p>Actor no encontrado</p>;
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{actor.name}</h1>
      <img 
        src={actor.photo} 
        alt={actor.name} 
        style={{ width: '200px', borderRadius: '8px' }} 
      />
      <p>Edad: {actor.age}</p>
      <p>Películas: {actor.movies.join(', ')}</p>
    </div>
  );
}
