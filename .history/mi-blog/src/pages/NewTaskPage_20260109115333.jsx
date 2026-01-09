import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function NewTaskPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    TASKS.push({ id: TASKS.length + 1, title, description, status: 'pending' });
    navigate('/dashboard'); 
  };

  return (
    <div>
      <h2>Añadir Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Descripción: </label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}
