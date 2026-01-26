import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  if (!projects || projects.length === 0) return <p>No hay proyectos.</p>;
  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>
        </li>
      ))}
    </ul>
  );
}
