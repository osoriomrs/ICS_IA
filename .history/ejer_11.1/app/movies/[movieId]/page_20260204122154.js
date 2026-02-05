import Link from 'next/link';

export default function ActorDetailPage({ params }) {
  const actor = {
    name: "Leonardo DiCaprio",
    movies: ["Inception", "Titanic"] // Esto vendría de tu API
  };

  return (
    <div>
      <h1>{actor.name}</h1>

      <p>
        Películas:{' '}
        {actor.movies && actor.movies.length > 0 ? (
          actor.movies.map((movieTitle, index) => (
            <span key={movieTitle}>
              <Link href={`/movies/${movieTitle.toLowerCase().replace(/\s/g, '-')}`}>
                {movieTitle}
              </Link>
              {index < actor.movies.length - 1 && ', '}
            </span>
          ))
        ) : (
          'No hay películas disponibles'
        )}
      </p>
    </div>
  );
}
