import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';
import { TasksContext } from '../contexts/TasksContext.jsx';

function TaskItem({ task }) {
  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(TasksContext);

  const disabled = task.author !== currentUser && currentUser !== 'Invitado';

  return (
    <div className="task-item">
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text} ({task.author})
      </span>
      <button disabled={disabled} onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
        Completar
      </button>
      <button disabled={disabled} onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>
        Eliminar
      </button>
    </div>
  );
}

export default React.memo(TaskItem);
