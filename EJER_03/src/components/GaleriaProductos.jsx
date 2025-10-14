import FichaProducto from './FichaProducto';

export default function GaleriaProductos({ productos }) {
  return (
    <div style={{
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}>
      {productos.map((producto) => (
        <FichaProducto key={producto.id} producto={producto}>
          <button>Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}
