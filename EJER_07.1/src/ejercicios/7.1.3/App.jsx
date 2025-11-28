import React, { useState, useCallback } from "react";
import ToastContainer from "./ToastContainer";

function App() {
  const [errores, setErrores] = useState([]);

  const addError = () => {
    const id = Date.now();
    setErrores([...errores, { id, message: `Error aleatorio ${id}` }]);
  };

  const clearError = useCallback(
    (id) => {
      setErrores((prev) => prev.filter((e) => e.id !== id));
    },
    [setErrores]
  );

  const clearAll = () => setErrores([]);

  return (
    <div>
      <h1>Ejercicio 7.1.3</h1>
      <button onClick={addError}>Agregar error</button>
      <button onClick={clearAll}>Limpiar todos</button>
      <ToastContainer errores={errores} clearError={clearError} />
    </div>
  );
}
export default App;