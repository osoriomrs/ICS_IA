export default function Tarea({ tarea, cambiarEstado }) {
  const { id, texto, completada, prioridad } = tarea;

  const colores = {
    alta: "danger",
    media: "warning",
    baja: "success",
  };

  return (
    <div
      className={`list-group-item d-flex align-items-center justify-content-between border-start border-4 border-${colores[prioridad]} ${
        completada ? "bg-light text-decoration-line-through text-muted" : ""
      }`}
    >
      <span onClick={() => cambiarEstado(id)} style={{ cursor: "pointer" }}>
        {texto}
      </span>
      <span className={`badge bg-${colores[prioridad]} text-uppercase`}>
        {prioridad}
      </span>
    </div>
  );
}
