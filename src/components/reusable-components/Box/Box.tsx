import React, { ReactNode } from "react";
import "./Box.css";

type Props = {
  children: ReactNode;
  isMistakeIcon?: boolean;
  isSoundIcon?: boolean;
};

const Box = (props: Props) => {
  console.log(props);

  return (
    <div
      className={` box ${props.isMistakeIcon && " mistake"} ${
        props.isSoundIcon && " sound"
      }  `}
    >
      {props.children}
    </div>
  );
};

export default Box;
