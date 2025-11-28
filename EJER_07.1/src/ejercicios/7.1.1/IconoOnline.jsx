import React from "react";
import PuntitoVerde from "./PuntitoVerde";

export default function IconoOnline({ isOnline }) {
  console.log("IconoOnline render");
  return (
    <div>
      <PuntitoVerde isOnline={isOnline} />
    </div>
  );
}
