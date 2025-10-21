import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import proyectos from './datos/proyectos'; 
import ProjectColumn from './components/ProjectColumn';
import './dashboard.css'; 

function Dashboard() {
  
  const [listaProyectos, setListaProyectos] = useState(proyectos);


  const handleActualizarEstado = (proyectoId, nuevoEstado) => {
    setListaProyectos((prevProyectos) =>
      prevProyectos.map((p) =>
        p.id === proyectoId ? { ...p, estado: nuevoEstado } : p
      )
    );
  };

  
  const estados = ['Pendiente', 'En Progreso', 'Completado'];

  return (
    <div className="container mt-5">
      <nav className="navbar navbar-dark bg-primary rounded mb-4">
    <div className="container-fluid justify-content-center">
      <span className="navbar-brand mb-0 h1">Dashboard de Gestión de Proyectos</span>
    </div>
  </nav>
  <div className="row">
    {estados.map((estado) => (
      <ProjectColumn
        key={estado}
        titulo={estado}
        proyectos={listaProyectos.filter((p) => p.estado === estado)}
        onActualizarEstado={handleActualizarEstado}
      />
    ))}
  </div>
      <div className="row">
        {estados.map((estado) => (
          <ProjectColumn
            key={estado}
            titulo={estado}
            proyectos={listaProyectos.filter((p) => p.estado === estado)}
            onActualizarEstado={handleActualizarEstado}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
