import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc', padding: '10px' }}>
        <h3>Dashboard</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/dashboard">Ver Tareas</Link></li>
          <li><Link to="/dashboard/new">Añadir Tarea</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '10px' }}>
        <Outlet />
      </main>
    </div>
  );
}
