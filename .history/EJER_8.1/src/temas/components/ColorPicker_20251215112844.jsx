import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext.jsx';

export default function ColorPicker() {
  const { theme, dispatch } = useContext(ThemeContext);

  return (
    <div>
      <label>Color primario: </label>
      <input
        type="color"
        value={theme.primaryColor}
        onChange={e => dispatch({ type: 'SET_PRIMARY_COLOR', payload: e.target.value })}
      />
    </div>
  );
}
