export default function PieFicha({ precio, enStock }) {
  if (!enStock) {
    return <p style={{ color: 'red', fontWeight: 'bold' }}>¡No disponible!</p>;
  }

  return (
    <p style={{ fontWeight: 'bold' }}>
      {precio.valor.toFixed(2)} {precio.moneda}{' '}
      {precio.enOferta && <span style={{ color: 'green' }}>¡OFERTA!</span>}
    </p>
  );
}
