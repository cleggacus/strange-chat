import styles from "../../styles/core/Div.module.scss";
import { FC } from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement> & {
  centerItems?: boolean,
  width?: number | string,
  height?: number | string,
  bgColor?: string,
  flex?: string | number
};

const Div: FC<DivProps> = ({ width, height, flex, centerItems, bgColor, style, className, children, ...props }) => {
  return <div 
    {...props} 
    style={{...style, backgroundColor: bgColor, flex, width, height}}
    className={`${centerItems ? styles.center : ""} ${styles.container} ${className || ""}`}
  >
    { children }
  </div>
}

export default Div;

export type {
  DivProps
}
