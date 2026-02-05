export const MOVIES = [
  { id: '1', title: 'Inception', year: 2010, director: 'Christopher Nolan', synopsis: 'Un ladrón roba secretos a través de los sueños.' },
  { id: '2', title: 'Matrix', year: 1999, director: 'Lana y Lilly Wachowski', synopsis: 'Un hacker descubre la realidad simulada.' },
]

export const ACTORS = [
  { id: 'a1', name: 'Leonardo DiCaprio', birthYear: 1974, bio: 'Actor estadounidense famoso por Inception.' },
  { id: 'a2', name: 'Keanu Reeves', birthYear: 1964, bio: 'Actor canadiense conocido por Matrix.' },
]

export const ROLES = [
  { movieId: '1', actorId: 'a1', character: 'Dom Cobb' },
  { movieId: '2', actorId: 'a2', character: 'Neo' },
]

export function getAllMovies() {
  return MOVIES
}

export function getMovieById(id) {
  return MOVIES.find(m => m.id === id)
}

export function getAllActors() {
  return ACTORS
}

export function getActorById(id) {
  return ACTORS.find(a => a.id === id)
}

export function getCastByMovieId(movieId) {
  return ROLES.filter(r => r.movieId === movieId)
    .map(r => getActorById(r.actorId))
}

export function getFilmographyByActorId(actorId) {
  return ROLES.filter(r => r.actorId === actorId)
    .map(r => getMovieById(r.movieId))
}
