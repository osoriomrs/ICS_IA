import React from "react";
import ListaIntermedia from "./ListaIntermedia";

function ContadorPadre({ contador }) {
  console.log("Render → ContadorPadre_opt");

  const users = React.useMemo(
    () =>
      Array.from({ length: 500 }, (_, i) => ({
        id: i + 1,
        name: `Usuario ${i + 1}`,
        email: `usuario${i + 1}@correo.com`,
        avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
        isOnline: Math.random() > 0.5
      })),
    []
  );

  return <ListaIntermedia users={users} />;
}

export default ContadorPadre;
