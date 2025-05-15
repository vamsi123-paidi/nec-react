import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;