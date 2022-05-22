import styles from './side-nav.module.scss';

/* eslint-disable-next-line */
export interface SideNavProps {}

export function SideNav(props: SideNavProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SideNav!</h1>
    </div>
  );
}

export default SideNav;
