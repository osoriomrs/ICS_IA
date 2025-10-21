import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectColumn({ titulo, proyectos, onActualizarEstado }) {
  return (
    <div className="col">
      <h4 className="text-center mb-3">{titulo}</h4>
      {proyectos.map((p) => (
        <ProjectCard
          key={p.id}
          proyecto={p}
          onActualizarEstado={onActualizarEstado}
        />
      ))}
    </div>
  );
}

export default ProjectColumn;