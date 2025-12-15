// ====================================================================================
// COMPONENTE PRINCIPAL: ListaLibros (versión con TABLA)
// ====================================================================================

// El componente recibe por props:
// - libros: array de libros con sus datos
export default function ListaLibros({ libros }) {

  // ---------------------------------------------------------
  // Este componente solo muestra el catálogo de libros.
  // Es un componente de lectura: únicamente renderiza datos.
  // ---------------------------------------------------------

  return (
    <div>
      <h2>Catálogo de Libros</h2>

      {/* Tabla donde mostraremos los datos */}
      <table>

        {/* Cabecera de la tabla */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Ejemplares Totales</th>
            <th>Ejemplares Disponibles</th>
          </tr>
        </thead>

        {/* Cuerpo de la tabla */}
        <tbody>
          {libros.map((libro) => (
            // Cada fila representa un libro
            <tr key={libro.id}>
              
              {/* ID del libro */}
              <td>{libro.id}</td>

              {/* Título del libro */}
              <td>{libro.titulo}</td>

              {/* Autor */}
              <td>{libro.autor}</td>

              {/* Total de ejemplares */}
              <td>{libro.ejemplaresTotales}</td>

              {/* Ejemplares disponibles */}
              <td>{libro.ejemplaresDisponibles}</td>

            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}


// ====================================================================================
// OPCIÓN ALTERNATIVA 1: LISTA COMO TARJETAS (CARDS)
// ====================================================================================
//
// Esta versión muestra cada libro dentro de una tarjeta rectangular.
// Es más visual y moderna, ideal para pantallas pequeñas.
// ====================================================================================

export function ListaLibrosCards({ libros }) {

  return (
    <div>
      <h2>Catálogo de Libros (Tarjetas)</h2>

      {/* Contenedor de tarjetas */}
      <div className="cards-container">

        {libros.map(libro => (
          // Cada tarjeta representa un libro
          <div className="card" key={libro.id}>

            {/* Título del libro */}
            <h3>{libro.titulo}</h3>

            {/* Datos del libro */}
            <p><strong>ID:</strong> {libro.id}</p>
            <p><strong>Autor:</strong> {libro.autor}</p>
            <p><strong>Ejemplares totales:</strong> {libro.ejemplaresTotales}</p>
            <p><strong>Disponibles:</strong> {libro.ejemplaresDisponibles}</p>

          </div>
        ))}

      </div>
    </div>
  );
}


// ====================================================================================
// OPCIÓN ALTERNATIVA 2: LISTA UL/LI SIMPLE
// ====================================================================================
//
// Versión minimalista: muestra los libros como elementos de una lista simple.
// Ideal para móviles, apps pequeñas o si solo necesitas mostrar datos rápidamente.
// ====================================================================================

export function ListaLibrosListaSimple({ libros }) {

  return (
    <div>
      <h2>Catálogo de Libros (Lista Simple)</h2>

      <ul>
        {libros.map(libro => (
          <li key={libro.id}>

            {/* Información principal */}
            <strong>{libro.titulo}</strong> — {libro.autor}

            {/* Datos secundarios */}
            <div>
              ID: {libro.id} |
              Totales: {libro.ejemplaresTotales} |
              Disponibles: {libro.ejemplaresDisponibles}
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
}


// ====================================================================================
// OPCIÓN ALTERNATIVA 3: TABLA + BOTONES (CRUD LISTO)
// ====================================================================================
//
// Pensada para sistemas donde quieras añadir botones de acciones:
// - Editar libro
// - Eliminar libro
// - Ver más información
//
// (Los botones aún no tienen funcionalidad, es solo el diseño)
// ====================================================================================

export function ListaLibrosConAcciones({ libros }) {

  return (
    <div>
      <h2>Catálogo de Libros (Con Acciones)</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Totales</th>
            <th>Disponibles</th>
            <th>Acciones</th> {/* Nueva columna */}
          </tr>
        </thead>

        <tbody>
          {libros.map(libro => (
            <tr key={libro.id}>

              <td>{libro.id}</td>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.ejemplaresTotales}</td>
              <td>{libro.ejemplaresDisponibles}</td>

              {/* Botones listos para programar luego */}
              <td>
                <button>Editar</button>
                <button>Eliminar</button>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// ====================================================================================
// OPCIÓN ALTERNATIVA 4: VISTA COMPACTA TIPO "FILA"
// ====================================================================================
//
// Estilo moderno tipo apps móviles, cada libro como una fila horizontal
// con datos principales a la izquierda y valores a la derecha.
// ====================================================================================

export function ListaLibrosCompacta({ libros }) {

  return (
    <div>
      <h2>Catálogo de Libros (Vista Compacta)</h2>

      {libros.map(libro => (
        <div className="row-item" key={libro.id}>

          {/* Título y autor: información principal */}
          <div>
            <strong>{libro.titulo}</strong>
            <p>{libro.autor}</p>
          </div>

          {/* Datos a la derecha */}
          <div>
            <p>Totales: {libro.ejemplaresTotales}</p>
            <p>Disponibles: {libro.ejemplaresDisponibles}</p>
          </div>

        </div>
      ))}
    </div>
  );
}
