import { PropsWithChildren } from 'react';

/**
 * Example Card component to test tailwindcss
 *
 * @param props the component props, used to render child components
 */
export function Card(props: PropsWithChildren) {
  return (
    <div className="max-w-sm overflow-hidden rounded shadow-md outline">
      {props.children}
    </div>
  );
}

/**
 * Card header component, provides basic padding and styling.
 * Uses h3 elements for cards.
 *
 * @param props the component props, used to render child components
 */
export function CardHeader(props: PropsWithChildren) {
  return (
    <div className="mb-8 px-6 pt-4 text-4xl font-bold">{props.children}</div>
  );
}
Card.Header = CardHeader;

/**
 * Card body component, provides basic padding
 *
 * @param props the component props, used to render child components
 */
export function CardBody(props: PropsWithChildren) {
  return <div className="px-6 py-4">{props.children}</div>;
}

Card.Body = CardBody;
