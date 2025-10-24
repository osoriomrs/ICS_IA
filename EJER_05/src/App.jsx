import { useState } from "react";
import Filtros from "./components/Filtros";
import ListaTareas from "./components/ListaTareas";
import ResumenTareas from "./components/ResumenTareas";
import "bootstrap/dist/css/bootstrap.min.css";


const tareasIniciales = [
  { id: 1, texto: "Aprender sobre renderizado de listas en React", completada: true, prioridad: "alta" },
  { id: 2, texto: "Practicar hooks de React", completada: false, prioridad: "media" },
  { id: 3, texto: "Revisar documentación de Bootstrap", completada: false, prioridad: "baja" },
  { id: 4, texto: "Construir un pequeño dashboard", completada: true, prioridad: "alta" },
  { id: 5, texto: "Desplegar en Netlify", completada: false, prioridad: "media" },
];

export default function App() {
  const [tareas, setTareas] = useState(tareasIniciales);
  const [filtro, setFiltro] = useState("todas");

  const cambiarEstado = (id) => {
    setTareas((prev) =>
      prev.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const tareasFiltradas =
    filtro === "todas" ? tareas : tareas.filter((t) => t.prioridad === filtro);

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Dashboard de Tareas</h1>

      <Filtros filtro={filtro} setFiltro={setFiltro} />

      <ListaTareas tareas={tareasFiltradas} cambiarEstado={cambiarEstado} />

      <ResumenTareas tareasVisibles={tareasFiltradas} total={tareas.length} />
    </div>
  );
}