import React from 'react';

function SearchBar({ query, onChange }) {
  return (
    <input
      type="text"
      className="form-control mb-3"
      placeholder="Buscar usuario..."
      value={query}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;