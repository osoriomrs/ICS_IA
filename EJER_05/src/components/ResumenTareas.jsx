export default function ResumenTareas({ tareasVisibles, total }) {
  const completadas = tareasVisibles.filter((t) => t.completada).length;

  if (tareasVisibles.length === 0)
    return <p className="text-center text-muted">No hay tareas para este filtro.</p>;

  if (completadas === tareasVisibles.length)
    return <p className="text-center text-success fw-bold">
      ¡Enhorabuena! Has completado todas las tareas de esta sección.
    </p>;

  return (
    <p className="text-center">
      Mostrando <strong>{tareasVisibles.length}</strong> de <strong>{total}</strong> tareas.
    </p>
  );
}
