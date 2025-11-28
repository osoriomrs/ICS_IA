import { useState } from "react";
import ListaIntermedia from "./ListaIntermedia";

export default function ContadorPadre({ usuarios }) {
  const [contador, setContador] = useState(0);

  console.log("ContadorPadre render");

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Clicks: {contador}
      </button>

      <ListaIntermedia usuarios={usuarios} />
    </div>
  );
}
