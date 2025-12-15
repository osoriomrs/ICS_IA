import { useState } from "react";
import Modal from "./Modal";

// Componente que muestra la lista de alumnos y permite ver sus detalles
export default function ListaAlumnos({ alumnos, prestamos, libros }) {

  // Estado para guardar qué alumno está seleccionado para ver detalles
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  return (
    <div>
      <h2>Alumnos</h2>

      {/* Listado de alumnos en pantalla */}
      <ul>
        {alumnos.map(alumno => (
          <li key={alumno.id}>
            {/* Nombre del alumno */}
            {alumno.nombre}
            <img src={alumno.imagen} alt={alumno.nombre} width={50} />

            {/* Botón que abre el modal mostrando los detalles de ese alumno */}
            <button onClick={() => setAlumnoSeleccionado(alumno)}>
              Ver detalles
            </button>
          </li>
        ))}
      </ul>

      {/* Si hay un alumno seleccionado, mostrar el Modal */}
      {alumnoSeleccionado && (
        <Modal
          visible={true}                     // Forzamos que el modal esté visible
          onClose={() => setAlumnoSeleccionado(null)} // Cierra el modal
        >

          {/* Información del alumno */}
          <h2>{alumnoSeleccionado.nombre}</h2>
          <p><strong>ID:</strong> {alumnoSeleccionado.id}</p>
          <p><strong>Curso:</strong> {alumnoSeleccionado.curso}</p>

          {/* Préstamos del alumno */}
          <h4>Préstamos:</h4>
          <ul>
            {prestamos
              // Filtrar solamente sus préstamos
              .filter(p => p.alumnoId === alumnoSeleccionado.id)
              // Renderizar cada préstamo
              .map(p => {
                // Buscar el libro correspondiente al préstamo
                const libro = libros.find(l => l.id === p.libroId);

                return (
                  <li key={p.id}>
                    {/* Mostrar datos del préstamo */}
                    {libro?.titulo} - {p.estado} - {p.fechaPrestamo} a {p.fechaDevolucionPrevista}
                  </li>
                );
              })}
          </ul>
        </Modal>
      )}
    </div>
  );
}

/* --------------------------------------------------------------------------
   OTRAS FORMAS POSIBLES DE MOSTRAR LA LISTA DE ALUMNOS
   (según cómo te lo pueda pedir un usuario o profesor)
   -------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   1. Mostrar los alumnos en una TABLA en vez de una lista <ul>
   --------------------------------------------------------------------------

  <table>
    <thead>
      <tr>
        <th>Foto</th>
        <th>Nombre</th>
        <th>Curso</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {alumnos.map(a => (
        <tr key={a.id}>
          <td><img src={a.imagen} width="50" /></td>
          <td>{a.nombre}</td>
          <td>{a.curso}</td>
          <td>
            <button onClick={() => setAlumnoSeleccionado(a)}>
              Ver detalles
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   2. Mostrar los alumnos como TARJETAS (cards)
   --------------------------------------------------------------------------

  <div className="cards-container">
    {alumnos.map(a => (
      <div key={a.id} className="card">
        <img src={a.imagen} width="80" />
        <h3>{a.nombre}</h3>
        <p>{a.curso}</p>
        <button onClick={() => setAlumnoSeleccionado(a)}>Ver detalles</button>
      </div>
    ))}
  </div>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   3. Mostrar PRINCIPALMENTE la FOTO y solo el nombre debajo
   --------------------------------------------------------------------------

  {alumnos.map(a => (
    <div key={a.id} className="foto-grid">
      <img src={a.imagen} width="100" />
      <p>{a.nombre}</p>
    </div>
  ))}

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   4. Mostrar buscador + lista filtrada de alumnos
   --------------------------------------------------------------------------

  const [busqueda, setBusqueda] = useState("");

  <input
    type="text"
    placeholder="Buscar alumno..."
    value={busqueda}
    onChange={e => setBusqueda(e.target.value)}
  />

  <ul>
    {alumnos
      .filter(a => a.nombre.toLowerCase().includes(busqueda.toLowerCase()))
      .map(a => (
        <li key={a.id}>{a.nombre}</li>
      ))}
  </ul>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   5. Ordenar alumnos por nombre o curso
   --------------------------------------------------------------------------

  const alumnosOrdenados = [...alumnos].sort((a,b) => a.nombre.localeCompare(b.nombre));

  <ul>
    {alumnosOrdenados.map(a => (
      <li key={a.id}>{a.nombre}</li>
    ))}
  </ul>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   6. Mostrar alumnos agrupados por curso
   --------------------------------------------------------------------------

  const cursos = [...new Set(alumnos.map(a => a.curso))];

  {cursos.map(curso => (
    <div key={curso}>
      <h3>{curso}</h3>
      <ul>
        {alumnos
          .filter(a => a.curso === curso)
          .map(a => <li key={a.id}>{a.nombre}</li>)
        }
      </ul>
    </div>
  ))}

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   7. Mostrar solo alumnos CON préstamos activos
   --------------------------------------------------------------------------

  const alumnosConPrestamos = alumnos.filter(a =>
    prestamos.some(p => p.alumnoId === a.id && p.estado === "activo")
  );

  <ul>
    {alumnosConPrestamos.map(a => (
      <li key={a.id}>{a.nombre}</li>
    ))}
  </ul>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   8. Mostrar solo alumnos SIN préstamos
   --------------------------------------------------------------------------

  const alumnosSinPrestamos = alumnos.filter(a =>
    !prestamos.some(p => p.alumnoId === a.id)
  );

  <ul>
    {alumnosSinPrestamos.map(a => (
      <li key={a.id}>{a.nombre}</li>
    ))}
  </ul>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   9. Mostrar cantidad de préstamos al lado del nombre
   --------------------------------------------------------------------------

  <ul>
    {alumnos.map(a => {
      const cantidad = prestamos.filter(p => p.alumnoId === a.id).length;
      return (
        <li key={a.id}>
          {a.nombre} ({cantidad} préstamos)
        </li>
      );
    })}
  </ul>

--------------------------------------------------------------------------- */


/* --------------------------------------------------------------------------
   10. Mostrar la lista en forma de GRID (cuadrícula)
   --------------------------------------------------------------------------

  <div className="grid">
    {alumnos.map(a => (
      <div className="grid-item" key={a.id}>
        <img src={a.imagen} width="80" />
        <p>{a.nombre}</p>
      </div>
    ))}
  </div>

--------------------------------------------------------------------------- */
