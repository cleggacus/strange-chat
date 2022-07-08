import styles from "../../../styles/login/LoginForm.module.scss";
import { FC } from "react";
import Div from "../../core/Div";
import ShapeTileImage from "../../../assets/shape_tile.png";
import LoginInfo from "./Login";
import RegisterInfo from "./Register";

type Props = {
  transitionState: boolean
}

const Infos: FC<Props> = ({ transitionState }) => {
  return <Div className={`${styles.infos}  ${transitionState ? styles.transition : ""}`}>
    <Div className={styles.infoInner}>
      <div style={{backgroundImage: `url("${ShapeTileImage}")`}} className={styles.bg}></div>
      <LoginInfo></LoginInfo>
      <RegisterInfo></RegisterInfo>
    </Div>
  </Div>

}

export default Infos;