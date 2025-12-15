import { useState, useEffect } from 'react'; 
// Hooks de React: useState para manejar estado, useEffect para efectos secundarios (cargar datos)

import Dashboard from './components/Dashboard';
import ListaLibros from './components/ListaLibros';
import ListaAlumnos from './components/ListaAlumnos';
import PrestamosActivos from './components/PrestamosActivos';
import FormNuevoPrestamo from './components/FormNuevoPrestamo';
// Importamos los componentes que mostraremos según la página activa

function App() {
  // --- Estados principales ---
  const [libros, setLibros] = useState([]);       
  // Array de libros, inicialmente vacío
  const [prestamos, setPrestamos] = useState([]); 
  // Array de préstamos
  const [alumnos, setAlumnos] = useState([]);     
  // Array de alumnos
  const [pagina, setPagina] = useState('dashboard'); 
  // Página que se está mostrando ('dashboard', 'libros', etc.)
  const hoy = new Date().toISOString().split('T')[0]; 
  // Fecha de hoy en formato YYYY-MM-DD

  // --- Cargar datos desde JSON ---
  useEffect(() => {
    fetch('/data/libros.json')
      .then(res => res.json())
      .then(data => setLibros(data));
    // Carga libros desde JSON y actualiza estado

    fetch('/data/alumnos.json')
      .then(res => res.json())
      .then(data => setAlumnos(data));
    // Carga alumnos desde JSON

    fetch('/data/prestamos.json')
      .then(res => res.json())
      .then(data => setPrestamos(data));
    // Carga préstamos desde JSON
  }, []); 
  // El array vacío [] indica que esto solo se ejecuta al montar el componente

  // --- 1. Estadísticas del dashboard ---
  const totalLibros = libros.length; 
  // Total de libros
  const prestados = prestamos.filter(p => p.estado === 'activo').length; 
  // Cantidad de préstamos activos
  const vencidos = prestamos.filter(p => p.estado === 'activo' && p.fechaDevolucionPrevista < hoy).length; 
  // Cantidad de préstamos activos y vencidos

  // Libro más prestado
  const libroMasPrestado = libros.reduce((maxLibro, libro) => {
    const vecesPrestado = prestamos.filter(p => p.libroId === libro.id).length;
    // Contamos cuántas veces se prestó este libro
    return vecesPrestado > (prestamos.filter(p => p.libroId === maxLibro?.id).length || 0)
      ? libro
      : maxLibro;
    // Comparamos con el libro actual más prestado
  }, null);

  // --- 2. Función para devolver un préstamo ---
  const devolverPrestamo = (prestamoId) => {
    const prestamosActualizados = prestamos.map(p => {
      if (p.id === prestamoId) {
        return { ...p, estado: 'devuelto', fechaDevolucionReal: hoy };
        // Cambiamos estado y añadimos fecha de devolución real
      }
      return p;
    });
    setPrestamos(prestamosActualizados); 
    // Actualizamos estado

    const prestamoDevuelto = prestamos.find(p => p.id === prestamoId); 
    // Buscamos el préstamo devuelto para actualizar ejemplares

    setLibros(prev =>
      prev.map(l =>
        l.id === prestamoDevuelto.libroId
          ? { ...l, ejemplaresDisponibles: l.ejemplaresDisponibles + 1 }
          : l
      )
    );
    // Incrementamos ejemplares disponibles del libro devuelto
  };

  // --- 3. Función para crear un nuevo préstamo ---
  const crearPrestamo = ({ libroId, alumnoId }) => {
    const libroSeleccionado = libros.find(l => l.id === libroId);

    if (libroSeleccionado.ejemplaresDisponibles <= 0) {
      alert("No hay ejemplares disponibles");
      return;
    }
    // No se puede prestar si no hay ejemplares disponibles

    const nuevoPrestamo = {
      id: `p${prestamos.length + 1}`,
      // ID único simple: p1, p2, etc.
      libroId,
      alumnoId,
      fechaPrestamo: hoy,
      fechaDevolucionPrevista: new Date(Date.now() + 21*24*60*60*1000).toISOString().split('T')[0],
      estado: 'activo'
    };
    setPrestamos([...prestamos, nuevoPrestamo]); 
    // Añadimos nuevo préstamo

    setLibros(prev =>
      prev.map(l =>
        l.id === libroId
          ? { ...l, ejemplaresDisponibles: l.ejemplaresDisponibles - 1 }
          : l
      )
    ); 
    // Restamos un ejemplar disponible

    console.log("Préstamo creado:", nuevoPrestamo); 
    // Mostramos en consola
  };

  return (
    <>
      {/* CABECERA */}
      <header className="mb-4">
        <h1 className='text-center'>Biblioteca Escolar</h1>
      </header>

      {/* Menú */}
      <nav className='mb-4'>
        <div className='btn-group' role="group">
          <button className="btn btn-primary" onClick={()=>setPagina('dashboard')}>Dashboard</button>
    <button className="btn btn-primary" onClick={()=>setPagina('libros')}>Libros</button>
    <button className="btn btn-primary" onClick={()=>setPagina('alumnos')}>Alumnos</button>
    <button className="btn btn-primary" onClick={()=>setPagina('prestamos')}>Préstamos</button>
    <button className="btn btn-primary" onClick={()=>setPagina('nuevo')}>Nuevo Préstamo</button>
        </div>
      </nav>

      <main>
        {/* Renderizado condicional según página */}
        {pagina==='dashboard' && (
          <Dashboard 
            totalLibros={totalLibros}
            prestados={prestados}
            vencidos={vencidos}
            libroMasPrestado={libroMasPrestado}
          />
        )}

        {pagina==='libros' && (
          <ListaLibros libros={libros} />
        )}

        {pagina==='alumnos' && (
          <ListaAlumnos alumnos={alumnos} prestamos={prestamos} libros={libros} />
        )}

        {pagina==='prestamos' && (
          <PrestamosActivos
            prestamos={prestamos.filter(p => p.estado === 'activo')}
            libros={libros}
            alumnos={alumnos}
            onDevolver={devolverPrestamo}
          />
        )}

        {pagina==='nuevo' && (
          <FormNuevoPrestamo
            libros={libros}
            alumnos={alumnos}
            onCrear={crearPrestamo}
          />
        )}
      </main>
    </>
  )
}

export default App;
