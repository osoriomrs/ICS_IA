import React, { useContext } from 'react';
import { ThemeContext } from '../components/ThemeContext.jsx';

export default React.memo(function BotonPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <button style={{
      backgroundColor: theme.primaryColor,
      color: '#fff',
      fontSize: theme.fontSize,
      textTransform: theme.textTransform,
      padding: '8px 16px',
      margin: '4px'
    }}>
      Botón
    </button>
  );
});
