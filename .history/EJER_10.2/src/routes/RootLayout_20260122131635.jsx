import { Outlet, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function RootLayout() {
  return (
    <>
      <header className="bg-dark text-white p-3 mb-4">
        <nav className="container">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link text-white"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link text-white"
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/projects/new"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link text-white"
                }
              >
                Nuevo Proyecto
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}
