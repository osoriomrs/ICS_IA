let projects = [
  { id: 1, title: "Proyecto Alpha", tasks: [{ id: 1, title: "Tarea 1", completed: false }] },
  { id: 2, title: "Proyecto Beta", tasks: [{ id: 2, title: "Tarea 2", completed: true }] }
];

export async function getProjects() {
  return projects;
}

export async function getProject(id) {
  return projects.find(p => p.id === Number(id));
}

export async function addProject({ title }) {
  const newProject = { id: Date.now(), title, tasks: [] };
  projects.push(newProject);
  return newProject;
}

export async function deleteProject(id) {
  projects = projects.filter(p => p.id !== Number(id));
}

export async function addTask(projectId, { title }) {
  const project = projects.find(p => p.id === Number(projectId));
  const newTask = { id: Date.now(), title, completed: false };
  project.tasks.push(newTask);
  return newTask;
}

export async function toggleTask(projectId, taskId) {
  const project = projects.find(p => p.id === Number(projectId));
  const task = project.tasks.find(t => t.id === Number(taskId));
  task.completed = !task.completed;
}

export async function deleteTask(projectId, taskId) {
  const project = projects.find(p => p.id === Number(projectId));
  project.tasks = project.tasks.filter(t => t.id !== Number(taskId));
}
