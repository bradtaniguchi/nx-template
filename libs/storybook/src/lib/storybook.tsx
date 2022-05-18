import styles from './storybook.module.scss';

export interface StorybookProps {
  /**
   * An example prop, provided to check with docs
   * @default undefined
   */
  exampleProp?: string;
}

/**
 * Storybook landing component
 * @param props display props for storybook landing component
 * @returns jsx
 */
export function Storybook(props: StorybookProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Storybook!</h1>
      <p>This is a test component used to test storybook development.</p>
      {props.exampleProp ? props.exampleProp : null}
    </div>
  );
}

export default Storybook;
