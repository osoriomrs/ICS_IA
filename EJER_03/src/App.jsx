import { productos } from './datos/productos';
import GaleriaProductos from './components/GaleriaProductos';

export default function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Galería de Productos</h1>
      <GaleriaProductos productos={productos} />
    </div>
  );
}
