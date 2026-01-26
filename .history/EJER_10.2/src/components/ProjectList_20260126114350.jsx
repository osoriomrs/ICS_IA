import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map(p => (
        <li key={p.id}>
          <Link to={`/projects/${p.id}`}>{p.title}</Link>
        </li>
      ))}
    </ul>
  );
}
