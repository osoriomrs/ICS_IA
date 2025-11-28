import React from "react";
import ToastItem from "./ToastItem";

function ToastContainer({ errores, clearError }) {
  return (
    <div>
      {errores.map((e) => (
        <ToastItem key={e.id} error={e} onClose={clearError} />
      ))}
    </div>
  );
}

export default React.memo(ToastContainer);
