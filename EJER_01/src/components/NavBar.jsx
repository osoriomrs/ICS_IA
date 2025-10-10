import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-green">
      <div className="container-fluid d-flex align-items-center">
        <a className="navbar-brand me-4" href="#">Naturaleza Viva</a>
        <ul className="navbar-nav d-flex flex-row">
          <li className="nav-item mx-2"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Proyectos</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Recursos</a></li>
          <li className="nav-item mx-2"><a className="nav-link" href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
