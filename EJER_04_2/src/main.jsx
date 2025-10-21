import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>
);