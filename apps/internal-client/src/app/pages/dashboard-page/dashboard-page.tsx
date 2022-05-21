import { BaseConfig, useConfig } from '@nx-template/common-react';
import { useMemo } from 'react';
import styles from './dashboard-page.module.scss';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const { config, configError, configLoading } = useConfig({
    overrides: useMemo(
      () =>
        ({
          tag: 'local',
          ref_type: 'tag',
          sha: '',
        } as Partial<BaseConfig>),
      []
    ),
  });

  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardPage!</h1>
      {configLoading && <div>Loading config...</div>}
      {!!configError && <div>Error Loading Config</div>}
      {config && <div>{JSON.stringify(config)}</div>}
    </div>
  );
}

export default DashboardPage;
