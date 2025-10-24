import { useState } from "react";
import ArticleList from "./components/ArticleList";
import SearchBar from "./components/SearchBar";
import EmptyState from "./components/EmptyState";
import "bootstrap/dist/css/bootstrap.min.css";

const initialArticles = [
  { id: "a1", title: "React 19 ya está aquí", category: "React", pinned: true },
  { id: "a2", title: "Novedades en CSS: View Transitions", category: "CSS", pinned: false },
  { id: "a3", title: "State Management con Zustand", category: "React", pinned: false },
  { id: "a4", title: "El futuro de JavaScript: Records y Tuples", category: "JavaScript", pinned: false },
];

export default function App() {
  const [articles, setArticles] = useState(initialArticles);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("Todos");

  // --- Filtrado combinado ---
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      category === "Todos" || article.category === category;
    return matchesSearch && matchesCategory;
  });

  // --- Lógica para fijar artículo ---
  const handlePin = (id) => {
    setArticles((prev) =>
      prev.map((a) => ({ ...a, pinned: a.id === id }))
    );
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4"> Feed de Noticias</h1>

      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <div className="d-flex justify-content-center gap-2 my-3">
        {["Todos", "React", "CSS", "JavaScript"].map((cat) => (
          <button
            key={cat}
            className={`btn ${
              category === cat ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredArticles.length > 0 ? (
        <ArticleList articles={filteredArticles} onPin={handlePin} />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
