import React from "react";
import IconoOnline from "./IconoOnline";

export default function Avatar({ avatar, isOnline }) {
  console.log("Avatar render");
  return (
    <div>
      <img src={avatar} alt="avatar" width={50} height={50} style={{ borderRadius: "50%" }} />
      <IconoOnline isOnline={isOnline} />
    </div>
  );
}
