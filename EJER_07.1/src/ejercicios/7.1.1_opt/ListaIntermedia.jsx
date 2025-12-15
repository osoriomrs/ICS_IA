import TarjetaUsuario from "./TarjetaUsuario";

export default function ListaIntermedia({ usuarios }) {
  console.log("ListaIntermedia render");

  if (!usuarios) return null; 

  return (
    <div>
      {usuarios.map((u) => (
        <TarjetaUsuario key={u.id} nombre={u.nombre} />
      ))}
    </div>
  );
}
