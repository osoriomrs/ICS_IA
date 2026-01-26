import { Outlet, NavLink } from "react-router-dom";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <>
      <header>
        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Proyectos</NavLink>
            </li>
            <li>
              <NavLink to="/projects/new" className={({ isActive }) => isActive ? "active" : ""}>Nuevo Proyecto</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
