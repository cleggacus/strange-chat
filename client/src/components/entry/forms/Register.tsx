import styles from "../../../styles/login/LoginForm.module.scss";
import { FC, useEffect, useState } from "react";
import Div from "../../core/Div";
import Input from "../../core/Input";
import Button from "../../core/Button";

type Props = {
  switchState: () => void
}

const RegisterForm: FC<Props> = ({ switchState }) => {
  const [err, setErr] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const register = () => {
    if(password != rePassword) {
      setErr("Passwords do not match.")
      return;
    }

    const data = {
      username,
      email,
      password
    };

    fetch("/api/user/register", {
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

  return <Div centerItems className={styles.form2}>
    <Div>
      <Input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username"></Input>
      <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"></Input>
      <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></Input>
      <Input onChange={e => setRePassword(e.target.value)} type="password" placeholder="Retype Password"></Input>
      <p className={styles.err}>{err}</p>
      <Button onClick={register}>Create Account</Button>
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