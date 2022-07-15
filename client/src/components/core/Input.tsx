import styles from "../../styles/core/Input.module.scss";
import { FC, InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: FC<InputProps> = ({className, ...props}) => {
  return <input {...props} className={`${className} ${styles.input}`}></input>
}

export default Input;