import { useDebugValue, useEffect, useRef, useState } from 'react';
import { BaseConfig } from '../types';
import { getConfig } from '../utils';

/**
 * Hook that can be used to get the config file.
 *
 * This file should be generated and available from the client-side,
 * primarily to get an idea of which build is being used.
 *
 * @deprecated use getStaticProps instead.
 * @param params the params object
 * @param params.path The path to the config file, otherwise defaults to `config.json`
 * @param params.overrides Override options to use if there is an error, or override
 * the values within the config file.
 * @see getConfig
 * @see Config
 */
export function useConfig<AppConfig extends object>(params?: {
  path?: string;
  overrides?: Partial<BaseConfig & AppConfig>;
}) {
  const { path, overrides } = params ?? {};
  const mounted = useRef(false);
  const [configLoading, setConfigLoading] = useState<boolean>(false);
  const [configError, setConfigError] = useState<unknown>();
  const [config, setConfig] = useState<BaseConfig>();

  useEffect(() => {
    if (!mounted.current) {
      setConfigLoading(true);
      getConfig(params)
        .then((config) => {
          setConfigLoading(false);
          setConfig(config);
        })
        .catch((err) => {
          setConfigLoading(false);
          if (!overrides) setConfigError(err);
        });
      mounted.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, overrides]);

  useDebugValue({ configLoading, configError, config });

  return { configLoading, configError, config };
}
