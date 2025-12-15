// Modal.jsx
// Componente Modal reutilizable.
// Recibe: visible (booleano), onClose (función para cerrar) y children (contenido a mostrar).

export default function Modal({ visible, onClose, children}) {

  // Si visible es false, el modal NO se renderiza
  if (!visible) return null;

  return (
    // Capa exterior del modal (fondo oscuro, pero sin estilos aquí)
    // Al hacer click aquí, cerramos el modal
    <div className="modal-overlay" onClick={onClose}>
      
      {/* Contenedor del modal */}
      {/* stopPropagation evita cerrar el modal haciendo click dentro */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Contenido dinámico enviado desde el componente padre */}
        {children}

        {/* Botón para cerrar el modal */}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
