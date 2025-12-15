import React, { useReducer, useCallback } from 'react';
import Producto from './components/Producto.jsx';
import CarritoItem from './components/CarritoItem.jsx';
import TotalCarrito from './components/TotalCarrito.jsx';
import { carritoReducer, initialState } from './scripts/carritoReducer.js';
import productosData from './data/productos.json';

export default function App() {
  const [state, dispatch] = useReducer(carritoReducer, initialState);

  const addItem = useCallback(
    producto => dispatch({ type: 'ADD_ITEM', payload: producto }),
    []
  );

  const removeItem = useCallback(
    id => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    []
  );

  const increment = useCallback(
    id => dispatch({ type: 'INCREMENT', payload: id }),
    []
  );

  const decrement = useCallback(
    id => dispatch({ type: 'DECREMENT', payload: id }),
    []
  );

  return (
    <div className="app">
      <h1>Productos</h1>
      {productosData.map(p => (
        <Producto key={p.id} producto={p} addItem={addItem} />
      ))}

      <h2>Carrito</h2>
      {state.items.map(item => (
        <CarritoItem
          key={item.id}
          item={item}
          increment={increment}
          decrement={decrement}
          remove={removeItem}
        />
      ))}

      <TotalCarrito items={state.items} />
    </div>
  );
}
