import { PropsWithChildren } from 'react';

export type ButtonLinkProps = PropsWithChildren<JSX.IntrinsicElements['a']>;

/**
 * Basic Button component using tailwindcss
 *
 * @param props the component props, passed along to the `button`
 * tag
 */
export function ButtonLink(props: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={['rounded-full p-2', props.className ?? ''].join(' ')}
    />
  );
}
