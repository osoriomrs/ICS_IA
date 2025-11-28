import React from "react";

export default function PuntitoVerde({ isOnline }) {
  console.log("PuntitoVerde render");
  const style = {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: isOnline ? "green" : "red",
    display: "inline-block",
    marginLeft: 6,
  };
  return <div style={style} title={isOnline ? "online" : "offline"} />;
}
