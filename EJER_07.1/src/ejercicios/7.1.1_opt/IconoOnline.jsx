import React from "react";
import PuntitoVerde from "./PuntitoVerde";

function IconoOnline({ isOnline }) {
  console.log("Render → IconoOnline_opt");

  return <PuntitoVerde isOnline={isOnline} />;
}

export default React.memo(IconoOnline);

