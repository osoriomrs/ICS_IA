import React from 'react';

export default function CarritoItem({ item, increment, decrement, remove }) {
  return (
    <div className="carrito-item">
      <span>{item.name} - ${item.price} x {item.quantity}</span>
      <button onClick={() => increment(item.id)}>+</button>
      <button onClick={() => decrement(item.id)}>-</button>
      <button onClick={() => remove(item.id)}>Eliminar</button>
    </div>
  );
}
