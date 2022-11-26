import { useContext, useEffect } from 'react';
import { Theme } from '../types';
import { ThemeContext } from './theme-context';
import { useLocalForage } from './use-local-forage';

/**
 * The key that should be used to save the theme
 * to local-storage
 */
export const USE_THEME_KEY = 'color-theme';

/**
 * Use theme hook is used to interact with the `ThemeContext` from the
 * `ThemeProvider`.
 *
 * Internally this checks against the window.matchMedia to see if the user has
 * a dark theme preference. If so, it will set the theme to dark by default.
 *
 */
export function useTheme() {
  const localForage = useLocalForage();
  const { setTheme } = useContext(ThemeContext);

  useEffect(() => {
    const hasDarkThemeKey$ = localForage
      .getItem(USE_THEME_KEY)
      .then((value) => value === ('dark' as Theme));

    const hasSystemDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    hasDarkThemeKey$.then((hasDarkThemeKey) => {
      hasDarkThemeKey || hasSystemDarkTheme
        ? setTheme('dark')
        : setTheme('light');
    });
  }, [localForage, setTheme]);
}
