// app/layout.js
import "@/styles/global.css";

export const metadata = {
  title: "Blog de Recetas 🍳",
  description: "Un blog para gestionar recetas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
