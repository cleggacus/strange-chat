import Div from "../../core/Div";
import styles from "../../../styles/login/LoginForm.module.scss";

const LoginInfo = () => {
  return <Div centerItems className={styles.info2}>
    <div>
      <h1>Sign in</h1>
      <p>Welcome back! Login to your account and start chatting.</p>
    </div>
  </Div>
}

export default LoginInfo;