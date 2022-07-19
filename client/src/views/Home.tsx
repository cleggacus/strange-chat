import { FC, useContext, useEffect, useState } from "react";
import { StoreContext } from "../store/store";
import useAuth from "../store/useAuth";

import styles from "../styles/Home.module.scss";

const Home: FC = () => {
  const auth = useAuth();

  return <div className={styles.content} >
  </div>
}

export default Home;
