import TarjetaUsuario from "./TarjetaUsuario";

export default function ListaIntermedia({ usuarios }) {
  console.log("ListaIntermedia render");

  if (!usuarios) return null; // 🔹 evita error si usuarios es undefined

  return (
    <div>
      {usuarios.map((u) => (
        <TarjetaUsuario key={u.id} nombre={u.nombre} />
      ))}
    </div>
  );
}
