import styles from "../../../styles/EntryForm.module.scss";
import { FC, useContext, useState } from "react";
import Input from "../../core/Input";
import Button from "../../core/Button";
import { StoreContext } from "../../../store/store";

type Props = {
  switchState: () => void
}

const LoginForm: FC<Props> = ({ switchState }) => {
  const { dispatch } = useContext(StoreContext);

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
        else {
          return dispatch({
            type: "setUser",
            payload: {
              username: data.userData.username,
              email: data.userData.email
            }
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  return <div className={styles.form1}>
    <div>
      <Input onChange={e => setUser(e.target.value)} placeholder="Email / Username"></Input>
      <Input onChange={e => setPassword(e.target.value)} type="password" placeholder="Password"></Input>
      <p className={styles.err} >{err}</p>
      <Button onClick={login}>Sign in</Button>
      <div className={styles.seperator}>
        <div></div>
        <p>or</p>
        <div></div>
      </div>
      <Button onClick={switchState}>Create Account</Button>
    </div>
  </div>
}

export default LoginForm;