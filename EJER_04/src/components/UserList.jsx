import React from 'react';

function UserList({ usuarios, onSeleccionarUsuario }) {
  return (
    <div className="list-group">
      {usuarios.map((user) => (
        <button
          key={user.id}
          className="list-group-item list-group-item-action"
          onClick={() => onSeleccionarUsuario(user.id)}
        >
          {user.nombre}
        </button>
      ))}
    </div>
  );
}

export default UserList;
