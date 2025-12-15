export const initialTheme = {
  primaryColor: '#6c5ce7',
  fontSize: 16,
  textTransform: 'none'
};

export function themeReducer(state, action) {
  switch (action.type) {
    case 'SET_PRIMARY_COLOR':
      return { ...state, primaryColor: action.payload };
    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };
    case 'SET_TEXT_TRANSFORM':
      return { ...state, textTransform: action.payload };
    default:
      return state;
  }
}
