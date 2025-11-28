import React from "react";

function UserCard({ nombre }) {
  return <p>{nombre}</p>;
}

export default React.memo(UserCard);
