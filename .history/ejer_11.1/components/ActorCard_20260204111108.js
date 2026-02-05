import Link from 'next/link'

export default function ActorCard({ actor }) {
  return (
    <div className="actor-card">
      <h3>{actor.name}</h3>
      <Link href={`/actors/${actor.id}`}>Ver perfil</Link>
    </div>
  )
}
