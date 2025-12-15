import { useState } from "react"; 
// Importa useState de React para manejar estados locales del formulario

export default function FormNuevoPrestamo({ libros, alumnos, onCrear }) {
  // Componente que recibe como props:
  // libros -> array de libros disponibles
  // alumnos -> array de alumnos
  // onCrear -> función que se llama cuando se crea un nuevo préstamo

  const hoy = new Date().toISOString().split("T")[0];
  // Fecha de hoy en formato YYYY-MM-DD

  const en21 = new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
  // Fecha de devolución prevista, 21 días desde hoy, en formato YYYY-MM-DD

  const [libroSeleccionado, setLibroSeleccionado] = useState("");
  // Estado para guardar el libro seleccionado en el select

  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState("");
  // Estado para guardar el alumno seleccionado en el select

  const handleCrear = () => {
    // Función que se ejecuta al pulsar "Crear Préstamo"

    if (!libroSeleccionado || !alumnoSeleccionado)
      return alert("Selecciona alumno y libro");
    // Validación: si no se ha seleccionado libro o alumno, muestra alerta y termina función

    const libro = libros.find(l => l.id === libroSeleccionado);
    // Busca el objeto libro en el array de libros según el id seleccionado

    if (libro.ejemplaresDisponibles <= 0) return alert("No hay ejemplares disponibles");
    // Valida que el libro tenga ejemplares disponibles

    const nuevoPrestamo = {
      id: `id${Date.now()}`, // ID único simple basado en timestamp
      libroId: libro.id,     // Guardamos el id del libro
      alumnoId: alumnoSeleccionado, // Guardamos el id del alumno
      fechaPrestamo: hoy,           // Fecha de creación del préstamo
      fechaDevolucionPrevista: en21, // Fecha prevista de devolución
      estado: "activo"               // Estado inicial del préstamo
    };

    onCrear(nuevoPrestamo);
    // Llama a la función pasada desde App.jsx para añadir el nuevo préstamo al estado global

    libro.ejemplaresDisponibles--;
    // Resta un ejemplar disponible del libro seleccionado (modifica el objeto directamente)

    setLibroSeleccionado("");
    setAlumnoSeleccionado("");
    // Limpia los selects para permitir un nuevo préstamo

    console.log("Nuevo préstamo creado:", nuevoPrestamo);
    // Muestra en consola los datos del préstamo creado
  };

  return (
    <div>
      <h2>Nuevo Préstamo</h2>

      <label>
        Libro:
        <select value={libroSeleccionado} onChange={e => setLibroSeleccionado(e.target.value)}>
          <option value="">--Selecciona libro--</option>
          {libros
            .filter(l => l.ejemplaresDisponibles > 0) // Solo muestra libros con ejemplares disponibles
            .map(libro => (
              <option key={libro.id} value={libro.id}>
                {libro.titulo} ({libro.ejemplaresDisponibles} disponibles)
              </option>
            ))}
        </select>
      </label>
      {/* Select de libros: muestra título y ejemplares disponibles, actualiza estado al cambiar */}

      <label>
        Alumno:
        <select value={alumnoSeleccionado} onChange={e => setAlumnoSeleccionado(e.target.value)}>
          <option value="">--Selecciona alumno--</option>
          {alumnos.map(alumno => (
            <option key={alumno.id} value={alumno.id}>
              {alumno.nombre}
            </option>
          ))}
        </select>
      </label>
      {/* Select de alumnos: muestra nombre de cada alumno y actualiza estado al cambiar */}

      <p>Fecha devolución: {en21}</p>
      {/* Muestra la fecha prevista de devolución debajo de los selects */}

      <button onClick={handleCrear}>Crear Préstamo</button>
      {/* Botón que ejecuta la función handleCrear al pulsarlo */}
    </div>
  );
}
