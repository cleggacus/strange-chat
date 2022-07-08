import { FC } from "react";
import Div, { DivProps } from "./Div";

import styles from "../../styles/core/Box.module.scss";

type BoxType = DivProps & {

}

const Box: FC<BoxType> = ({className, ...props}) => {
  return <Div {...props} className={`${className} ${styles.container}`}>

  </Div>
}

export default Box;