import React from "react";
import { useLoaderData } from "react-router-dom";
import ProjectList from "../components/ProjectList";

export default function ProjectsPage() {
  const projects = useLoaderData() || [];
  return (
    <div>
      <h1>Proyectos</h1>
      <ProjectList projects={projects} />
    </div>
  );
}
