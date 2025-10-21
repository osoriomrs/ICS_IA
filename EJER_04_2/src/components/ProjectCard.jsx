import React from 'react';
import TeamMemberList from './TeamMemberList';

function ProjectCard({ proyecto, onActualizarEstado }) {
  const estadosPosibles = ['Pendiente', 'En Progreso', 'Completado'];

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
       <div className="d-flex justify-content-between align-items-center mb-2">
  <h5 className="card-title mb-0">{proyecto.titulo}</h5>
  <span
    className="prioridad-chip"
    style={{
      backgroundColor:
        proyecto.prioridad === 'Alta' ? '#dc3545' : // rojo
        proyecto.prioridad === 'Media' ? '#fd7e14' : // naranja
        '#198754', // verde
    }}
  >
    {proyecto.prioridad}
  </span>
</div>
        <p className="card-text">{proyecto.descripcion}</p>
        <p className="mb-1"><strong>Responsables:</strong></p>
        <TeamMemberList miembros={proyecto.responsables} />
        <p className="mt-2"><strong>Prioridad:</strong> {proyecto.prioridad}</p>
        <div className="mt-2">
          <label className="form-label me-2"><strong>Estado:</strong></label>
          <select
            className="form-select"
            value={proyecto.estado}
            onChange={(e) => onActualizarEstado(proyecto.id, e.target.value)}
          >
            {estadosPosibles.map((estado) => (
              <option key={estado} value={estado}>{estado}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;