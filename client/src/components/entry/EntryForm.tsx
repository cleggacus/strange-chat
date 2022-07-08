import Box from "../core/Box";
import styles from "../../styles/login/LoginForm.module.scss";
import { FC, useEffect, useState } from "react";
import Forms from "./forms";
import Infos from "./infos";

type FormState = "Login" | "Register";

type Props = {
  initFormState: FormState
}

const EntryForm: FC<Props> = ({ initFormState }) => {
  const [formState, setFormState] = useState<FormState>(initFormState);
  const [transitionState, setTransitionState] = useState(false);

  useEffect(() => {
    if(transitionState)
      setTimeout(() => setTransitionState(false), 500)
  }, [transitionState])

  const switchState = () => {
    setTransitionState(true);
    setFormState(formState == "Login" ? "Register" : "Login");
  }

  return <Box className={`${styles.container} ${formState == "Login" ? styles.login : styles.register}`}>
    <Forms switchState={switchState}></Forms>
    <Infos transitionState={transitionState}></Infos>
  </Box>
}

export default EntryForm;