import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  return (
    <div>
      {users.map((u) => (
        <UserCard key={u.id} nombre={u.nombre} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
