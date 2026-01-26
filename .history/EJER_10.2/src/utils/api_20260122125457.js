let projects = [
  { id: "p1", name: "Proyecto React" },
  { id: "p2", name: "Proyecto Router" }
];

let tasks = [
  { id: "t1", projectId: "p1", title: "Crear componentes", completed: false },
  { id: "t2", projectId: "p1", title: "Usar hooks", completed: true },
  { id: "t3", projectId: "p2", title: "Configurar rutas", completed: false }
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find(p => p.id === id);
}

export function getTasksByProject(projectId) {
  return tasks.filter(t => t.projectId === projectId);
}

export function addProject(name) {
  projects.push({ id: "p" + Date.now(), name });
}

export function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
  tasks = tasks.filter(t => t.projectId !== id);
}

export function addTask(projectId, title) {
  tasks.push({
    id: "t" + Date.now(),
    projectId,
    title,
    completed: false
  });
}

export function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
}

export function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
}
