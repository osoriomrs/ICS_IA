import { getAllActors } from "@/lib/cinema";
import Link from "next/link";
import "@/styles/actors.css";

export default function ActorsPage() {
  const actors = getAllActors();
  return (
    <div className="container">
      <h1>Actores</h1>
      <div className="grid">
        {actors.map(actor => (
          <Link key={actor.id} href={`/actors/${actor.id}`} className="card">
            <img src={actor.photo} alt={actor.name} />
            <h3>{actor.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
