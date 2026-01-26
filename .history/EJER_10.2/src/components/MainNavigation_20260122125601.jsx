import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <nav>
      <NavLink to="/">Inicio</NavLink> |{" "}
      <NavLink to="/projects">Proyectos</NavLink>
    </nav>
  );
}
