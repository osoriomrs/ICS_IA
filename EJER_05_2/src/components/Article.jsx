export default function Article({ article, onPin }) {
  return (
    <div
      className={`card shadow-sm ${
        article.pinned ? "border-primary border-3" : ""
      }`}
    >
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-between align-items-center">
          {article.title}
          {article.pinned && <span className="badge bg-primary">Fijado</span>}
        </h5>
        <p className="card-text">
          <strong>Categoría:</strong> {article.category}
        </p>
        <button
          className={`btn ${
            article.pinned ? "btn-secondary" : "btn-outline-primary"
          }`}
          onClick={() => onPin(article.id)}
        >
          {article.pinned ? "Desfijar" : "Fijar"}
        </button>
      </div>
    </div>
  );
}
