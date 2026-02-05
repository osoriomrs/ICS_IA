import Link from 'next/link';

export default function MovieDetailPage({ params }) {
  const movie = {
    title: "Inception",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"] // Esto vendría de tu API
  };

  return (
    <div>
      <h1>{movie.title}</h1>

      <p>
        Actores:{' '}
        {movie.actors && movie.actors.length > 0 ? (
          movie.actors.map((actorName, index) => (
            <span key={actorName}>
              <Link href={`/actors/${actorName.toLowerCase().replace(/\s/g, '-')}`}>
                {actorName}
              </Link>
              {index < movie.actors.length - 1 && ', '}
            </span>
          ))
        ) : (
          'No hay actores disponibles'
        )}
      </p>
    </div>
  );
}
