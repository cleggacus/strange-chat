import styles from "../../../styles/EntryForm.module.scss";
import { FC, useState } from "react";
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

  return <div className={styles.form2}>
    <div>
      <Input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username"></Input>
      <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email"></Input>
      <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></Input>
      <Input onChange={e => setRePassword(e.target.value)} type="password" placeholder="Retype Password"></Input>
      <p className={styles.err}>{err}</p>
      <Button onClick={register}>Create Account</Button>
      <div className={styles.seperator}>
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <Button onClick={switchState}>Sign in</Button>
    </div>
  </div>
}

export default RegisterForm;