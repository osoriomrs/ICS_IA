import React, { useState, useMemo } from "react";
import SearchInput from "./SearchInput";
import UserList from "./UserList";

function App() {
  const [search, setSearch] = useState("");

  const users = useMemo(
    () =>
      Array.from({ length: 10000 }, (_, i) => ({
        id: i + 1,
        nombre: `Usuario ${i + 1}`,
      })),
    []
  );

  const filteredUsers = useMemo(
    () =>
      users.filter((u) => u.nombre.toLowerCase().includes(search.toLowerCase())),
    [search, users]
  );

  return (
    <div>
      <h1>Ejercicio 7.1.2</h1>
      <SearchInput search={search} setSearch={setSearch} />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;