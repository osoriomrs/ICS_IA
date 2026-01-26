let projects = [
  { id: "1", name: "Proyecto 1", tasks: [{ id: "a", title: "Tarea 1", completed: false }] },
  { id: "2", name: "Proyecto 2", tasks: [{ id: "b", title: "Tarea 2", completed: true }] }
];

export function getProjects() {
  return projects;
}

export function getProject(id) {
  return projects.find(p => p.id === id);
}

export function addProject(name) {
  const newProject = { id: Date.now().toString(), name, tasks: [] };
  projects.push(newProject);
  return newProject;
}

export function addTask(projectId, title) {
  const project = projects.find(p => p.id === projectId);
  const newTask = { id: Date.now().toString(), title, completed: false };
  project.tasks.push(newTask);
  return newTask;
}

export function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
}

export function deleteTask(projectId, taskId) {
  const project = projects.find(p => p.id === projectId);
  project.tasks = project.tasks.filter(t => t.id !== taskId);
}

export function toggleTaskCompletion(projectId, taskId) {
  const project = projects.find(p => p.id === projectId);
  const task = project.tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
}
