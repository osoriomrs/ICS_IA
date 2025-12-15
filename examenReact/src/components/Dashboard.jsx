// Importamos React (opcional en versiones modernas si usamos JSX)
import React from "react";

// Componente funcional Dashboard que recibe props desde App.jsx
// Props: totalLibros, prestados, vencidos, libroMasPrestado
export default function Dashboard({ totalLibros, prestados, vencidos, libroMasPrestado }) {
  return (
    <div className="row"> {/* Contenedor principal del dashboard */}

      <h2 className="text-center">Dashboard Biblioteca</h2> {/* Título centrado */}

      {/* Mostramos el total de libros */}
      <p>Total de libros: {totalLibros}</p>

      {/* Mostramos la cantidad de préstamos activos */}
      <p>Préstamos activos: {prestados}</p>

      {/* Mostramos la cantidad de préstamos vencidos */}
      <p>Préstamos vencidos: {vencidos}</p>

      {/* Mostramos el libro más prestado */}
      {/* Si libroMasPrestado es null o undefined, mostramos "Ninguno" */}
      <p>Libro más prestado: {libroMasPrestado?.titulo || "Ninguno"}</p>

    </div>
  );
}

