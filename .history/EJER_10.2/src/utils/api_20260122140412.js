let projects = [
  {
    id: "1",
    name: "Proyecto Alpha",
    tasks: [
      { id: "1", title: "Tarea A1", completed: false },
      { id: "2", title: "Tarea A2", completed: true },
    ],
  },
  {
    id: "2",
    name: "Proyecto Beta",
    tasks: [
      { id: "3", title: "Tarea B1", completed: false },
    ],
  },
];

export function getProjects() {
  return [...projects];
}

export function getProject(projectId) {
  return projects.find(p => p.id === projectId);
}

export function addProject(name) {
  const newProject = { id: Date.now().toString(), name, tasks: [] };
  projects.push(newProject);
  return newProject;
}

export function addTask(projectId, title) {
  const project = getProject(projectId);
  if (!project) return null;
  const newTask = { id: Date.now().toString(), title, completed: false };
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
