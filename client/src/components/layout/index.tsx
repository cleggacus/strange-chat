import styles from "../../styles/Layout.module.scss";
import { FC, ReactNode } from "react";
import { Outlet } from "react-router";
import Navbar from "./navbar";

type LayoutProps = {
  children?: ReactNode
};

const Layout: FC<LayoutProps> = ( props ) => {
  return <div className={styles.container}>
    <Navbar></Navbar>

    <div className={styles.content}>
      { props.children }
      <Outlet/>
    </div>
  </div>
}

export default Layout;