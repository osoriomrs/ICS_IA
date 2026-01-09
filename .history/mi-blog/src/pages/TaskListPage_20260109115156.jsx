import React from 'react';
import { TASKS } from '../data/tasks';
import { Link } from 'react-router-dom';

export default function TaskListPage() {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {TASKS.map(task => (
          <li key={task.id}>
            <Link to={`/dashboard/task/${task.id}`}>{task.title}</Link> - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
