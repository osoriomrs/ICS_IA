// PrestamosActivos.jsx
// Muestra todos los préstamos activos
export default function PrestamosActivos({ prestamos, alumnos, libros, onDevolver }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Libro</th>
          <th>Alumno</th>
          <th>Fecha Prestamo</th>
          <th>Fecha Devolución</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {prestamos.map(prestamo => {
          const alumno = alumnos.find(a => a.id === prestamo.alumnoId);
          const libro = libros.find(l => l.id === prestamo.libroId);

          return (
            <tr key={prestamo.id}>
              <td>{libro?.titulo}</td>
              <td>{alumno?.nombre}</td>
              <td>{prestamo.fechaPrestamo}</td>
              <td>{prestamo.fechaDevolucionPrevista}</td>
              <td>{prestamo.estado}</td>
              <td>
                {prestamo.estado === "activo" && (
                  <button onClick={() => onDevolver(prestamo.id)}>Devolver</button>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
