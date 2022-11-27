/**
 * Tuple of themes, either light or dark.
 */
export const THEMES = ['dark', 'light'] as const;

/**
 * Starter type for the different kinds of themes.
 */
export type Theme = typeof THEMES[number];

/**
 * Type-guard to check if a theme is valid.
 *
 * @param value the value to check against
 */
export const isTheme = (value: unknown): value is Theme =>
  typeof value === 'string' && THEMES.includes(value as Theme);
