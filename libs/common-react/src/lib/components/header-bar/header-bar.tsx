import { HeaderBarContext } from './header-bar-context';

export interface HeaderBarProps {
  /**
   * Children to display, will override the context display.
   */
  children?: React.ReactNode;
}

/**
 * The header-bar component provides a basic interface layout implementation for
 * a mui based "app-bar". However, this version includes a few specific setups
 * that are almost always used. Namely a responsive "hamburger" button, and
 * an integrated context-provider that can be used to "provide" an internal
 * implementation of a component, such as a "search-bar" or other UI based
 * actions within the center of the screen.
 *
 * To correctly leverage this component, you **must** provide the
 * HeaderBarContext.Provider at the "top-level" of your app, usually App.
 *
 * @param props component props
 * @see HeaderBarContext
 */

export function HeaderBar(props: HeaderBarProps) {
  return (
    <HeaderBarContext.Consumer>
      {(headerBarContext) => (
        <header className="sticky w-full bg-blue-500 py-4 px-2">
          <div className="flex flex-row justify-between">
            {props.children ? props.children : headerBarContext}
          </div>
        </header>
      )}
    </HeaderBarContext.Consumer>
  );
}

export default HeaderBar;

export * from './header-bar-context';
