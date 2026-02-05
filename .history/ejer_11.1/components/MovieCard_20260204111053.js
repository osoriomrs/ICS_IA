import Link from 'next/link'

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <Link href={`/movies/${movie.id}`}>Ver detalle</Link>
    </div>
  )
}
