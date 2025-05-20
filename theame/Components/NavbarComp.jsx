import React, { useContext, useState } from 'react';
import { ThemeContext } from './ThemeContext';

const NavbarComp = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1> The Theme is {theme}</h1>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>Toggle Theme</button>
    </div>
  );
};

export default NavbarComp