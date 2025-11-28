import React, { useState } from "react";
import ListaIntermedia from "./ListaIntermedia";

function generateUsers(n = 500) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
      isOnline: Math.random() > 0.5,
    });
  }
  return arr;
}

export default function ContadorPadre() {
  console.log("ContadorPadre render");
  const [count, setCount] = useState(0);
  const users = generateUsers(500); // generado en cada render -> problema

  return (
    <div>
      <div className="d-flex align-items-center gap-2 mb-3">
        <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>
          Incrementar contador
        </button>
        <span>Contador: {count}</span>
      </div>

      <ListaIntermedia users={users} />
    </div>
  );
}
