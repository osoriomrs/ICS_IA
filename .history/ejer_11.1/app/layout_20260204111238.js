import './globals.css'
import MainNavigation from '../components/MainNavigation'

export const metadata = {
  title: 'Cine Next.js',
  description: 'App de películas y actores',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
