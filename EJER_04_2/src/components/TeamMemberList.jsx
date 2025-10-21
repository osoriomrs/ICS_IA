import React from 'react';

function TeamMemberList({ miembros }) {
  return (
    <div className="d-flex flex-wrap gap-2">
      {miembros.map((m) => (
        <span key={m.id} className="badge bg-primary">
          {m.nombre}
        </span>
      ))}
    </div>
  );
}

export default TeamMemberList;