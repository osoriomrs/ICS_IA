import Article from "./Article";

export default function ArticleList({ articles, onPin }) {
  // Pinned al inicio
  const sorted = [...articles].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  return (
    <div className="row">
      {sorted.map((article) => (
        <div key={article.id} className="col-md-6 mb-3">
          <Article article={article} onPin={onPin} />
        </div>
      ))}
    </div>
  );
}
