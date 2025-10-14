export default function DetallesProducto({ caracteristicas, children }) {
  return (
    <div style={{ marginTop: '10px' }}>
      <ul>
        {caracteristicas.map((caract, index) => (
          <li key={index}>{caract}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}
