import React, { useContext, useMemo } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

export default React.memo(function CardPreview() {
  const { theme } = useContext(ThemeContext);

  const shadowColor = useMemo(() => {
    // sombra ligeramente más oscura
    const color = theme.primaryColor.replace('#', '');
    const r = parseInt(color.substring(0,2),16);
    const g = parseInt(color.substring(2,4),16);
    const b = parseInt(color.substring(4,6),16);
    const darker = `rgb(${Math.max(r-30,0)},${Math.max(g-30,0)},${Math.max(b-30,0)})`;
    return darker;
  }, [theme.primaryColor]);

  return (
    <div style={{
      border: `2px solid ${theme.primaryColor}`,
      boxShadow: `2px 2px 10px ${shadowColor}`,
      padding: '16px',
      margin: '8px'
    }}>
      Tarjeta de ejemplo
    </div>
  );
});
