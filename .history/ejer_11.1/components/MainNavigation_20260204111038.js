import Link from 'next/link'

export default function MainNavigation() {
  return (
    <nav className="main-nav">
      <Link href="/">Inicio</Link>
      <Link href="/movies">Películas</Link>
      <Link href="/actors">Actores</Link>
    </nav>
  )
}
