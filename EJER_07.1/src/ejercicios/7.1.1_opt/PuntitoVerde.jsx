import React from "react";

function PuntitoVerde({ isOnline }) {
  console.log("Render → PuntitoVerde_opt");

  return (
    <div
      style={{
        width: 15,
        height: 15,
        borderRadius: "50%",
        background: isOnline ? "green" : "red",
        marginTop: 5
      }}
    />
  );
}

export default React.memo(PuntitoVerde);
