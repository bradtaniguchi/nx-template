import { Card, Spinner } from 'flowbite-react';
import { ProjectGraph } from '@nrwl/devkit';
import {
  BaseConfig,
  getProjectsByTarget,
  useConfig,
  useNxGraph,
} from '@nx-template/common-react';
import { memo, Suspense, useMemo } from 'react';
import Link from 'next/link';

/**
 * Reusable snippet representing a centered loading spinner.
 */
const loadingSpinner = (
  <div className="flex flex-col justify-center ">
    <Spinner />
  </div>
);

const DashboardPageConfig = memo(function DashboardPageConfig({
  configLoading,
  configError,
  config,
}: {
  configLoading?: boolean;
  configError: unknown;
  config: BaseConfig;
}) {
  return (
    <Card>
      <h5 className="text-lg">config.json</h5>
      <div>
        {(() => {
          if (configLoading) return loadingSpinner;
          if (configError)
            return <p className="text-base">Error Loading config.json</p>;
          return (
            <div className="rounded outline outline-gray-400">
              <pre style={{ margin: '0' }}>
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          );
        })()}
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
      <h5 className="text-lg">External Links</h5>
      <div className="grid grid-cols-2 gap-2">
        <div className="flex flex-row align-middle">
          <Link href="nx-graph">nx-graph</Link>
        </div>
        <div className="flex flex-row align-middle">
          <Link href="storybooks">storybooks</Link>
        </div>
      </div>
    </Card>
  );
}

const DashboardPageProjects = memo(function DashboardPageProjects({
  nxGraphLoading,
  nxGraphError,
  nxGraph,
}: {
  nxGraphLoading?: boolean;
  nxGraphError: unknown;
  nxGraph: ProjectGraph<unknown>;
}) {
  const projects = useMemo(
    () =>
      nxGraph ? getProjectsByTarget({ graph: nxGraph, target: 'typedoc' }) : [],
    [nxGraph]
  );

  return (
    <Card>
      <h5 className="text-lg">Project Docs</h5>
      <div>
        {(() => {
          if (nxGraphLoading) return loadingSpinner;
          if (nxGraphError)
            return <p className="text-base">Error Loading nx-graph</p>;
          return (
            <div className="grid grid-cols-2 gap-2">
              {projects.map((project) => (
                <div key={project}>
                  <p className="flex flex-row align-middle">
                    {/* <ArticleIcon color="primary" /> */}
                    <Link href={`docs/${project}`}>{`${project} docs`}</Link>
                  </p>
                </div>
              ))}
            </div>
          );
        })()}
      </div>
    </Card>
  );
});

/**
 * The dashboard page component.
 *
 * This is the main and only component that acts as a "project landing page"
 * in regards to compiled docs and helper tools.
 */
export function DashboardPage() {
  const { config, configError, configLoading } = useConfig({
    path: 'config.json',
  });
  const { nxGraph, nxGraphError, nxGraphLoading } = useNxGraph({
    path: 'nx-graph/graph.json',
  });

  return (
    <div className="width-full m-3">
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        <div>
          <Suspense fallback={loadingSpinner}>
            <DashboardPageConfig
              config={config}
              configError={configError}
              configLoading={configLoading}
            />
          </Suspense>
        </div>

        <div>
          <DashboardPageLinks />
        </div>

        <div>
          <Suspense fallback={loadingSpinner}>
            <DashboardPageProjects
              nxGraphError={nxGraphError}
              nxGraphLoading={nxGraphLoading}
              nxGraph={nxGraph}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
