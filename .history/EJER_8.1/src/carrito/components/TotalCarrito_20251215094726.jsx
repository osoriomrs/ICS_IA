import React, { useMemo } from 'react';

export default function TotalCarrito({ items }) {
  const total = useMemo(() => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [items]);

  return <div className="total">Total: ${total}</div>;
}
