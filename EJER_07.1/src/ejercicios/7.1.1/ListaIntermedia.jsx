import React from "react";
import TarjetaUsuario from "./TarjetaUsuario";

export default function ListaIntermedia({ users }) {
  console.log("ListaIntermedia render");
  return (
    <div>
      {users.map(u => (
        <TarjetaUsuario key={u.id} user={u} />
      ))}
    </div>
  );
}
