import styles from "../../../styles/EntryForm.module.scss";
import { FC } from "react";
import ShapeTileImage from "../../../assets/shape_tile.png";
import LoginInfo from "./Login";
import RegisterInfo from "./Register";

type Props = {
  transitionState: boolean
}

const Infos: FC<Props> = ({ transitionState }) => {
  return <div className={`${styles.infos}  ${transitionState ? styles.transition : ""}`}>
    <div className={styles.infoInner}>
      <div style={{backgroundImage: `url("${ShapeTileImage}")`}} className={styles.bg}></div>
      <LoginInfo></LoginInfo>
      <RegisterInfo></RegisterInfo>
    </div>
  </div>

}

export default Infos;