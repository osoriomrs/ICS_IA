import React, { useReducer, useState } from 'react';
import { AuthContext } from './components/AuthContext.jsx';
import { TasksContext } from './components/TaskContext.jsx';
import TaskItem from './components/TaskItem.jsx';
import UserInfo from './components/UserInfo.jsx';
import { tasksReducer } from './scripts/tasksRducer.js';
import tasksData from './data/tasks.json';

export default function App() {
  const [currentUser, setCurrentUser] = useState('Ana');
  const [tasks, dispatch] = useReducer(tasksReducer, tasksData);

  const users = ['Ana', 'Luis', 'Invitado'];

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <div className="app">
          <h1>Dashboard de Tareas</h1>

          <label>
            Cambiar usuario:
            <select value={currentUser} onChange={e => setCurrentUser(e.target.value)}>
              {users.map(u => (
                <option key={u} value={u}>{u}</option>
              ))}
            </select>
          </label>

          <UserInfo />

          <h2>Tareas</h2>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </TasksContext.Provider>
    </AuthContext.Provider>
  );
}
