import { Card } from 'flowbite-react';
import Link from 'next/link';

/**
 * Component that renders the links to be shown on the page
 */
export function DashboardPageLinks() {
  return (
    <Card>
      <h5 className="text-lg dark:text-white">External Links</h5>
      <ul className="grid grid-cols-2 gap-2">
        <li>
          <div className="flex flex-row align-middle">
            <Link href="nx-graph" className="dark:text-white">
              nx-graph
            </Link>
          </div>
        </li>
        <li>
          <div className="flex flex-row align-middle">
            <Link href="storybooks" className="dark:text-white">
              storybooks
            </Link>
          </div>
        </li>
      </ul>
    </Card>
  );
}
