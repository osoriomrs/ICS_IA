export default function ProjectList({ projects }) {
  if (!Array.isArray(projects)) return <p>No hay proyectos</p>;

  return (
    <ul>
      {projects.map(project => (
        <li key={project.id}>
          <a href={`/projects/${project.id}`}>{project.name}</a>
        </li>
      ))}
    </ul>
  );
}
