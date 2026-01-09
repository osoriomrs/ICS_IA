import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <NavLink to="/" style={({ isActive }) => ({ marginRight: '10px', color: isActive ? 'blue' : 'black' })}>
        Inicio
      </NavLink>
      <NavLink to="/posts" style={({ isActive }) => ({ marginRight: '10px', color: isActive ? 'blue' : 'black' })}>
        Artículos
      </NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}>
        Panel de Tareas
      </NavLink>
    </nav>
  );
}
