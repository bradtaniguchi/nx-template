/* eslint-disable react-hooks/rules-of-hooks */
import { createInstance } from 'localforage';

/**
 * Factory function that returns the useLocalForage hook.
 * The factory should be called once globally to create the
 * actual hook that is then called later
 */
export function localForageContext(options?: LocalForageOptions) {
  return function useLocalForage() {
    return createInstance(options ?? {});
  };
}

// const useLocalForage = useLocalForageFactory();
// const {} = useLocalForage();

// export const LocalForageContext = React.createContext(createInstance());
