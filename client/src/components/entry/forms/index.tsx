import styles from "../../../styles/login/LoginForm.module.scss";
import { FC } from "react";
import Div from "../../core/Div";
import LoginForm from "./Login";
import RegisterForm from "./Register";

type Props = {
  switchState: () => void
}

const Forms: FC<Props> = ({ switchState }) => {
  return <Div className={styles.forms}>
    <LoginForm switchState={switchState}></LoginForm>
    <RegisterForm switchState={switchState}></RegisterForm>
  </Div>
}

export default Forms;