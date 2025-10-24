export default function Filtros({ filtro, setFiltro }) {
  const filtros = ["todas", "alta", "media", "baja"];

  return (
    <div className="d-flex justify-content-center gap-2 mb-4">
      {filtros.map((f) => (
        <button
          key={f}
          className={`btn ${
            filtro === f ? "btn-primary" : "btn-outline-primary"
          } text-capitalize`}
          onClick={() => setFiltro(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
