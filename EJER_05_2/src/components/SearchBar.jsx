export default function SearchBar({ value, onChange }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <input
        type="text"
        className="form-control w-50"
        placeholder="Buscar artículo..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
