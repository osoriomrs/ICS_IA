import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import usuarios from './datos/usuarios';
import UserList from './components/UserList';
import ProfileCard from './components/ProfileCard';
import SearchBar from './components/SearchBar';

function App() {
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);
  const [busqueda, setBusqueda] = useState('');

  const usuarioSeleccionado = usuarios.find(
    (u) => u.id === usuarioSeleccionadoId
  );

  const usuariosFiltrados = usuarios.filter((u) =>
    u.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Gestor de Perfiles de Usuario</h1>
      <div className="row">
        <div className="col-md-4">
          <h4>Lista de Usuarios</h4>
          <SearchBar query={busqueda} onChange={setBusqueda} />
          <UserList
            usuarios={usuariosFiltrados}
            onSeleccionarUsuario={setUsuarioSeleccionadoId}
          />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-start">
          {usuarioSeleccionado ? (
            <ProfileCard usuario={usuarioSeleccionado} />
          ) : (
            <p className="text-muted mt-5">Selecciona un usuario para ver los detalles</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
