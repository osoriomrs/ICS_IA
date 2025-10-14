export default function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div style={{ borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
      <h2>{nombre}</h2>
      <small>Vendedor: {vendedor.nombre} ⭐ {vendedor.rating}</small>
    </div>
  );
}
