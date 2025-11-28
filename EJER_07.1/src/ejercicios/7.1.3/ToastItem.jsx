import React from "react";

function ToastItem({ error, onClose }) {
  console.log("ToastItem render", error.id);

  return (
    <div style={{ border: "1px solid red", margin: 5, padding: 5 }}>
      <span>{error.message}</span>
      <button onClick={() => onClose(error.id)}>Cerrar</button>
    </div>
  );
}

export default React.memo(ToastItem);
