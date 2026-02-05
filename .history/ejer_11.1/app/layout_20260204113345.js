import './globals.css';
import MainNavigation from './components/MainNavigation';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MainNavigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
