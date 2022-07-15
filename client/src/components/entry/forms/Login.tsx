import styles from "../../../styles/login/LoginForm.module.scss";
import { FC, useEffect, useState } from "react";
import Div from "../../core/Div";
import Input from "../../core/Input";
import Button from "../../core/Button";

type Props = {
  switchState: () => void
}

const LoginForm: FC<Props> = ({ switchState }) => {
  return <Div centerItems className={styles.form1}>
    <Div>
      <Input type="email" placeholder="Email / Username"></Input>
      <Input type="password" placeholder="Password"></Input>
      <Button>Sign in</Button>
      <Div centerItems className={styles.seperator}>
        <Div></Div>
        <p>or</p>
        <Div></Div>
      </Div>
      <Button onClick={switchState}>Create Account</Button>
    </Div>
  </Div>
}

export default LoginForm;