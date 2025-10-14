import CabeceraFicha from './CabeceraFicha';
import ImagenProducto from './ImagenProducto';
import DetallesProducto from './DetallesProducto';
import PieFicha from './PieFicha';

export default function FichaProducto({ producto, children }) {
  const { nombre, vendedor, imagenes, caracteristicas, precio, enStock } = producto;

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '12px',
      padding: '16px',
      width: '260px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <CabeceraFicha nombre={nombre} vendedor={vendedor} />
      <ImagenProducto url={imagenes[0]} alt={nombre} />
      <DetallesProducto caracteristicas={caracteristicas}>
        {children}
      </DetallesProducto>
      <PieFicha precio={precio} enStock={enStock} />
    </div>
  );
}
