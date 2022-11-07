import { useState } from 'react';
import { Theme } from '../types/themes';
import { ThemeContext } from './theme-context';

/**
 * Provider for the theme to change the overall app theme.
 *
 * @param props component props
 * @param props.theme the theme we are to apply by default.
 * @see ThemeContext
 */
export function ThemeProvider(props: { theme: Theme }) {
  const [theme, setTheme] = useState(props.theme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}></ThemeContext.Provider>
  );
}
