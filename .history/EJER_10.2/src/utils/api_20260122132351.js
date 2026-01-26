let projects = [
  { id: "p1", name: "Proyecto Alpha" },
  { id: "p2", name: "Proyecto Beta" },
];

export async function getProjects() {
  return projects;
}

export async function createProject(project) {
  const id = "p" + (projects.length + 1);
  projects.push({ ...project, id });
}
