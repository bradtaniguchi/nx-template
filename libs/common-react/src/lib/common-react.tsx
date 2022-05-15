import styles from './common-react.module.scss';

/* eslint-disable-next-line */
export interface CommonReactProps {}

export function CommonReact(props: CommonReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CommonReact!</h1>
    </div>
  );
}

export default CommonReact;
