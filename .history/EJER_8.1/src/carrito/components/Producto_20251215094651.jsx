import React from 'react';

export default function Producto({ producto, addItem }) {
  return (
    <div className="producto">
      <span>{producto.name} - ${producto.price}</span>
      <button onClick={() => addItem(producto)}>Añadir al carrito</button>
    </div>
  );
}
