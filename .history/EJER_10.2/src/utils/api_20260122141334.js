let projects = [
  { id: "1", name: "Proyecto A", tasks: [] },
  { id: "2", name: "Proyecto B", tasks: [] }
];

export function getProjects() {
  return projects; // siempre un array
}

export function getProject(projectId) {
  return projects.find(p => p.id === projectId);
}

export function addProject(name) {
  const newProject = { id: String(Date.now()), name, tasks: [] };
  projects.push(newProject);
  return newProject;
}

export function addTask(projectId, title) {
  const project = getProject(projectId);
  if (!project) return null;
  const newTask = { id: String(Date.now()), title, completed: false };
  project.tasks.push(newTask);
  return newTask;
}

export function deleteProject(projectId) {
  projects = projects.filter(p => p.id !== projectId);
}

export function deleteTask(projectId, taskId) {
  const project = getProject(projectId);
  if (!project) return;
  project.tasks = project.tasks.filter(t => t.id !== taskId);
}

export function toggleTaskCompletion(projectId, taskId) {
  const project = getProject(projectId);
  if (!project) return;
  const task = project.tasks.find(t => t.id === taskId);
  if (task) task.completed = !task.completed;
}
