let projects = [
  {
    id: "p1",
    title: "Proyecto Demo",
    description: "Descripción del proyecto demo",
    tasks: [
      { id: "t1", title: "Tarea inicial", completed: false }
    ]
  }
];

export function getProjects() {
  return projects;
}

export function getProjectById(id) {
  return projects.find(p => p.id === id);
}

export function addProject({ title, description }) {
  projects.push({
    id: Math.random().toString(),
    title,
    description,
    tasks: []
  });
}

export function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
}

export function addTaskToProject(projectId, title) {
  const project = getProjectById(projectId);
  project.tasks.push({
    id: Math.random().toString(),
    title,
    completed: false
  });
}

export function toggleTask(projectId, taskId) {
  const task = getProjectById(projectId).tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
}

export function deleteTask(projectId, taskId) {
  const project = getProjectById(projectId);
  project.tasks = project.tasks.filter(t => t.id !== taskId);
}
