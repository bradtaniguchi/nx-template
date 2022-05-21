import { useConfig, useNxGraph } from '@nx-template/common-react';
import styles from './dashboard-page.module.scss';

/* eslint-disable-next-line */
export interface DashboardPageProps {}

export function DashboardPage(props: DashboardPageProps) {
  const { config, configError, configLoading } = useConfig();
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph();

  return (
    <div className={styles['container']}>
      <h1>Welcome to DashboardPage!</h1>
      {configLoading && <div>Loading config...</div>}
      {!!configError && <div>Error Loading Config</div>}
      {config && <div>{JSON.stringify(config)}</div>}
      <div style={{ margin: '5px' }}></div>
      {nxGraphLoading && <div>Loading nxGraph...</div>}
      {!!nxGraphError && <div>Error Loading nxGraph</div>}
      {nxGraph && <div>{JSON.stringify(nxGraph)}</div>}
    </div>
  );
}

export default DashboardPage;
