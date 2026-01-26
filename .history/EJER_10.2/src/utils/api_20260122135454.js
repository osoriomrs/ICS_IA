let projects = [
  { id: "1", title: "Proyecto A", tasks: [{ id: "t1", title: "Tarea 1", completed: false }] },
  { id: "2", title: "Proyecto B", tasks: [] }
];

export async function getProjects() {
  return projects;
}

export async function getProjectById(projectId) {
  return projects.find(p => p.id === projectId);
}

export async function addProject(project) {
  const newProject = { id: Date.now().toString(), title: project.title, tasks: [] };
  projects.push(newProject);
  return newProject;
}

export async function addTaskToProject(projectId, task) {
  const project = projects.find(p => p.id === projectId);
  if (!project) throw new Error("Proyecto no encontrado");
  const newTask = { id: Date.now().toString(), ...task };
  project.tasks.push(newTask);
  return newTask;
}

export function toggleTaskCompletion(projectId, taskId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return false;
  const task = project.tasks.find(t => t.id === taskId);
  if (!task) return false;
  task.completed = !task.completed;
  return true;
}

export function deleteTask(projectId, taskId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return false;
  project.tasks = project.tasks.filter(t => t.id !== taskId);
  return true;
}

export async function deleteProject(projectId) {
  projects = projects.filter(p => p.id !== projectId);
}
