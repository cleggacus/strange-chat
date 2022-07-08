import styles from "../../styles/core/Input.module.scss";
import { FC } from "react";

type InputProps = React.HTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({className, ...props}) => {
  return <input {...props} className={`${className} ${styles.input}`}></input>
}

export default Input;