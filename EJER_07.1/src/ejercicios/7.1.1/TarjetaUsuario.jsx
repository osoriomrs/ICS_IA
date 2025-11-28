import React from "react";
import Avatar from "./Avatar";

export default function TarjetaUsuario({ user }) {
  console.log(`TarjetaUsuario render id=${user.id}`);
  return (
    <div className="card mb-1 p-2">
      <div className="d-flex align-items-center">
        <div style={{ width: 60 }}>
          <Avatar avatar={user.avatar} isOnline={user.isOnline} />
        </div>
        <div className="ms-2">
          <div><strong>{user.name}</strong></div>
          <div style={{ fontSize: 12 }}>{user.email}</div>
        </div>
      </div>
    </div>
  );
}
