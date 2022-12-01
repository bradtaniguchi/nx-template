import { ProjectGraph } from '@nrwl/devkit';
import { BaseConfig, getProjectsByTarget } from '@nx-template/common-react';
import { Card } from 'flowbite-react';
import Link from 'next/link';
import { memo, useMemo } from 'react';

const DashboardPageConfig = memo(function DashboardPageConfig({
  config,
}: {
  config: BaseConfig;
}) {
  return (
    <Card>
      <h5 className="text-lg dark:text-white">config.json</h5>
      <div>
        <div className="rounded outline outline-gray-400">
          <pre className="m-0 dark:bg-slate-800 dark:text-white">
            {JSON.stringify(config, null, 2)}
          </pre>
        </div>
      </div>
    </Card>
  );
});

/**
 * Component that renders the links to be shown on the page
 */
function DashboardPageLinks() {
  return (
    <Card>
      <h5 className="text-lg dark:text-white">External Links</h5>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-row align-middle">
          <Link href="nx-graph" className="dark:text-white">
            nx-graph
          </Link>
        </div>
        <div className="flex flex-row align-middle">
          <Link href="storybooks" className="dark:text-white">
            storybooks
          </Link>
        </div>
      </div>
    </Card>
  );
}

const DashboardPageProjects = memo(function DashboardPageProjects({
  nxGraph,
}: {
  nxGraph: ProjectGraph<unknown>;
}) {
  const projects = useMemo(
    () =>
      nxGraph ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' }) : [],
    [nxGraph]
  );

  return (
    <Card>
      <h5 className="text-lg dark:text-white">Generated TSDocs</h5>
      <div>
        <div className="grid grid-cols-2 gap-2">
          {projects.map((project) => (
            <div key={project}>
              <div className="flex flex-row align-middle dark:text-white">
                {/* <ArticleIcon color="primary" /> */}
                <Link href={`docs/${project}`}>{`${project} TSDocs`}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
});

export interface DashboardPageProps {
  config: BaseConfig;
  nxGraph: ProjectGraph;
}

/**
 * The dashboard page component.
 *
 * This is the main and only component that acts as a "project landing page"
 * in regards to compiled docs and helper tools.
 *
 * @param props DashboardPageProps
 */
export function DashboardPage(props: DashboardPageProps) {
  const { config, nxGraph } = props;

  return (
    <div className="width-full m-3">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2">
        <div>
          <DashboardPageConfig config={config} />
        </div>
        <div>
          <DashboardPageLinks />
        </div>
        <div>
          <DashboardPageProjects nxGraph={nxGraph} />
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
