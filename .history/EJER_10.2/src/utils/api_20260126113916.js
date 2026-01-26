let projects = [
  {
    id: "p1",
    title: "Proyecto Demo",
    description: "Proyecto de ejemplo",
    tasks: [
      { id: "t1", title: "Primera tarea", completed: false }
    ]
  }
];

export function getProjects() {
  return projects;
}

export function getProjectById(projectId) {
  return projects.find(p => p.id === projectId);
}

export function addProject({ title, description }) {
  const newProject = {
    id: Math.random().toString(),
    title,
    description,
    tasks: []
  };
  projects.push(newProject);
}

export function deleteProject(projectId) {
  projects = projects.filter(p => p.id !== projectId);
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
  const project = getProjectById(projectId);
  const task = project.tasks.find(t => t.id === taskId);
  task.completed = !task.completed;
}

export function deleteTask(projectId, taskId) {
  const project = getProjectById(projectId);
  project.tasks = project.tasks.filter(t => t.id !== taskId);
}
