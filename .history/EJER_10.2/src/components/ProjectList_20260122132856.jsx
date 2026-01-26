import React from "react";

export default function ProjectList({ projects = [] }) {
  if (!projects.length) return <p>No hay proyectos disponibles</p>;

  return (
    <ul>
      {projects.map((project) => (
        <li key={project.id}>{project.name}</li>
      ))}
    </ul>
  );
}
