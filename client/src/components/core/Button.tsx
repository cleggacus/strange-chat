import styles from "../../styles/core/Button.module.scss";
import { FC } from "react";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({className, ...props}) => {
  return <button {...props} className={`${className} ${styles.button}`}></button>
}

export default Button;