import ListaIntermedia from "./ListaIntermedia";

export default function ContadorPadre({ usuarios }) {
  console.log("ContadorPadre render");

  return <ListaIntermedia usuarios={usuarios} />;
}