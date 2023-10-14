import { ReactNode } from "react";
import "./Box.css";

type Props = {
  children: ReactNode;
  isStatusComponent?: boolean;
  isSoundIcon?: boolean;
};

const Box = (props: Props) => {
  return (
    <div
      className={` box ${props.isStatusComponent && " statusComponent"} ${
        props.isSoundIcon && " sound"
      }  `}
    >
      {props.children}
    </div>
  );
};

export default Box;
