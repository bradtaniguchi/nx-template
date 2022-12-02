import { getProjectsByTarget } from '@nx-template/common-react';
import { Card } from 'flowbite-react';
import { ProjectGraph } from 'nx/src/config/project-graph';
import { memo, useMemo } from 'react';
import Link from 'next/link';

export const DashboardPageProjects = memo(function DashboardPageProjects({
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
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project}>
              <div className="flex flex-row align-middle dark:text-white">
                {/* <ArticleIcon color="primary" /> */}
                <Link href={`docs/${project}`}>{`${project} TSDocs`}</Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
});
