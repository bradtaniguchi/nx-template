import { CommonLogger } from '@nx-template/common';
import {
  DashboardPage,
  DashboardPageProps,
} from '../components/dashboard-page/dashboard-page';
import { loadNxGraph } from '../utils/load-nx-graph';

/**
 * The Main index landing page. Renders the dashboard page
 *
 * @param props DashboardPageProps
 */
export function Index(props: DashboardPageProps) {
  return <DashboardPage {...props} />;
}

export default Index;

/**
 * Returns the props for the index page.
 */
export async function getStaticProps() {
  const logger = new CommonLogger();
  const config = (() => {
    const common = {
      sha: process.env.GITHUB_SHA ?? '',
      ref_type: process.env.GITHUB_REF_TYPE ?? '',
      date: new Date().toISOString(),
    };
    if (process.env.GITHUB_REF_TYPE === 'branch')
      return {
        ...common,
        branch: process.env.GITHUB_REF ?? '',
      };
    // Fallback just return tag, as branch release models usually are used.
    return {
      ...common,
      tag: process.env.GITHUB_REF ?? '',
    };
  })();

  const nxGraph = await loadNxGraph();
  const props = {
    config,
    nxGraph,
  };

  logger.log(JSON.stringify(props, null, 2));

  return {
    props,
  };
}
