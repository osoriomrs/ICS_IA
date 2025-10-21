import React from 'react';

function ProfileCard({ usuario }) {
  if (!usuario) return null;

  return (
    <div className="card mt-3" style={{ width: '22rem' }}>
      <img src={usuario.avatarUrl} className="card-img-top" alt={usuario.nombre} />
      <div className="card-body">
        <h3 className="card-title"><strong>{usuario.nombre}</strong></h3>
        <p className="card-text"> {usuario.email}</p>
        <p className="card-text">
          <h4><strong>Información de contacto:</strong></h4><br />
          <p><strong>Calle: </strong>{usuario.direccion.calle}</p>
          <p><strong>Ciudad: </strong>{usuario.direccion.ciudad}</p>
        </p>
        <p><strong>Aficiones:</strong></p>
        <div className="aficiones-container">
         {usuario.aficiones.map((aficion, i) => {
    // Colores por índice
    const colores = ['#0d6efd', '#6c757d', '#198754']; 
    const color = colores[i] || '#0d6efd'; 
    return (
      <span
        key={i}
        className="aficion-chip"
        style={{ backgroundColor: color }}
      >
        {aficion}
      </span>
    );
  })}
        </div>
        </div>
      </div>
  );
}

export default ProfileCard;
