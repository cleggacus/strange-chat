import styles from "../../../styles/login/LoginForm.module.scss";
import { FC, useEffect, useState } from "react";
import Div from "../../core/Div";
import Input from "../../core/Input";
import Button from "../../core/Button";

type Props = {
  switchState: () => void
}

const LoginForm: FC<Props> = ({ switchState }) => {
  const [err, setErr] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    const data = {
      user,
      password
    };

    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => data.json())
      .then(data => {
        if(data.err)
          setErr(data.err)
        else
          setErr("")
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <Div centerItems className={styles.form1}>
    <Div>
      <Input onChange={e => setUser(e.target.value)} placeholder="Email / Username"></Input>
      <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></Input>
      <p className={styles.err} >{err}</p>
      <Button onClick={login}>Sign in</Button>
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