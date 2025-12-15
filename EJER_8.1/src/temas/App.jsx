import React, { useReducer } from 'react';
import { ThemeContext } from './components/ThemeContext.jsx';
import { themeReducer, initialTheme } from './scripts/themeReducer.js';
import BotonPreview from './components/BotonPreview.jsx';
import TextoPreview from './components/TextoPreview.jsx';
import CardPreview from './components/CardPreview.jsx';
import ColorPicker from './components/ColorPicker.jsx';

export default function App() {
  const [theme, dispatch] = useReducer(themeReducer, initialTheme);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      <div className="app" style={{ display: 'flex', padding: '16px' }}>
        <div className="panel-controles" style={{ marginRight: '32px' }}>
          <h2>Controles</h2>
          <ColorPicker />
          <label>
            Tamaño de letra:
            <input
              type="range"
              min="10"
              max="40"
              value={theme.fontSize}
              onChange={e => dispatch({ type: 'SET_FONT_SIZE', payload: Number(e.target.value) })}
            />
          </label>
          <div>
            Transformar texto:
            <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'none' })}>Normal</button>
            <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'uppercase' })}>MAYÚSCULAS</button>
            <button onClick={() => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: 'capitalize' })}>Capitalizadas</button>
          </div>
        </div>

        <div className="vista-previa">
          <h2>Vista Previa</h2>
          <BotonPreview />
          <TextoPreview />
          <CardPreview />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
