import React from "react";
import IconoOnline from "./IconoOnline";

function Avatar({ avatar, isOnline }) {
  console.log("Render → Avatar_opt");

  return (
    <div>
      <img src={avatar} width={60} />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
}

export default React.memo(Avatar);
