import Tarea from "./Tarea";

export default function ListaTareas({ tareas, cambiarEstado }) {
  return (
    <div className="list-group mb-4">
      {tareas.length > 0 ? (
        tareas.map((t) => (
          <Tarea key={t.id} tarea={t} cambiarEstado={cambiarEstado} />
        ))
      ) : (
        <div className="text-center text-muted">No hay tareas para este filtro.</div>
      )}
    </div>
  );
}
