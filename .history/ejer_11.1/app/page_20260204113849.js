// app/page.js
import Link from 'next/link';
import { MOVIES, ACTORS } from '../lib/cinema';

export default function HomePage() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎬 Bienvenido a CineApp</h1>

      <section style={{ marginTop: '2rem' }}>
        <h2>Películas</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {MOVIES.map((movie) => (
            <li key={movie.id} style={{ width: '150px', textAlign: 'center' }}>
              <Link href={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  style={{ width: '100%', borderRadius: '8px' }}
                />
                <p style={{ marginTop: '0.5rem' }}>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '3rem' }}>
        <h2>Actores</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
          {ACTORS.map((actor) => (
            <li key={actor.id} style={{ width: '150px', textAlign: 'center' }}>
              <Link href={`/actors/${actor.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <img 
                  src={actor.photo} 
                  alt={actor.name} 
                  style={{ width: '100%', borderRadius: '50%' }}
                />
                <p style={{ marginTop: '0.5rem' }}>{actor.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
