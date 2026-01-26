import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/projects">Proyectos</NavLink></li>
        <li><NavLink to="/projects/new">Nuevo Proyecto</NavLink></li>
      </ul>
    </nav>
  );
}
