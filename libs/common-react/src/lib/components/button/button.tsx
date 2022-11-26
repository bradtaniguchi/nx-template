import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<JSX.IntrinsicElements['button']>;

/**
 * Basic Button component using tailwindcss
 *
 * @param props the component props, passed along to the `button`
 * tag
 */
export function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={['rounded-full p-2', props.className ?? ''].join(' ')}
    />
  );
}
