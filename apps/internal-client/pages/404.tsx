import { Card } from 'flowbite-react';

/**
 * The 404 page that is rendered when a page isn't found
 */
export default function PageNotFound() {
  return (
    <div className="flex flex-grow">
      <div className="mt-64 flex justify-center">
        <Card>
          <h5 className="text-lg">Page Not Found</h5>
        </Card>
      </div>
    </div>
  );
}
