import styles from "../../../styles/EntryForm.module.scss";
import { FC } from "react";
import LoginForm from "./Login";
import RegisterForm from "./Register";

type Props = {
  switchState: () => void
}

const Forms: FC<Props> = ({ switchState }) => {
  return <div className={styles.forms}>
    <LoginForm switchState={switchState}></LoginForm>
    <RegisterForm switchState={switchState}></RegisterForm>
  </div>
}

export default Forms;