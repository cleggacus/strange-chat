import styles from "../../../styles/login/LoginForm.module.scss";
import { FC, useEffect, useState } from "react";
import Div from "../../core/Div";
import Input from "../../core/Input";
import Button from "../../core/Button";

type Props = {
  switchState: () => void
}

const RegisterForm: FC<Props> = ({ switchState }) => {
  return <Div centerItems className={styles.form2}>
    <Div>
      <Input placeholder="Email"></Input>
      <Input placeholder="Password"></Input>
      <Input placeholder="Retype Password"></Input>
      <Button>Create Account</Button>
      <Div centerItems className={styles.seperator}>
        <Div></Div>
        <p>or</p>
        <Div></Div>
      </Div>
      <Button onClick={switchState}>Sign in</Button>
    </Div>
  </Div>
}

export default RegisterForm;