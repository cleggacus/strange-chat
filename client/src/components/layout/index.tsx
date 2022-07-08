import styles from "../../styles/Layout.module.scss";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";

type LayoutProps = {
  children?: ReactNode
};

const Layout: FC<LayoutProps> = ( props ) => {
  return <div className={styles.container}>
    { props.children }
    <Outlet/>
  </div>
}

export default Layout;