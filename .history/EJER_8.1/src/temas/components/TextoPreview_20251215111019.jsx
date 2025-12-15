import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

export default React.memo(function TextoPreview() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{
      fontSize: theme.fontSize,
      textTransform: theme.textTransform,
      color: theme.primaryColor
    }}>
      Texto de ejemplo
    </p>
  );
});
