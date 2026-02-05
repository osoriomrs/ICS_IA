import { ACTORS } from '../../../lib/cinema';

export default async function ActorDetailPage({ params }) {
  // ⚡ IMPORTANTE: params es una promesa
  const { actorId } = await params;

  const actor = ACTORS.find(a => a.id === actorId);

  if (!actor) return <p>Actor no encontrado</p>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{actor.name}</h1>
      <p>Edad: {actor.age}</p>
      <p>Películas: {actor.movies ? actor.movies.join(', ') : 'No hay películas'}</p>
    </div>
  );
}
