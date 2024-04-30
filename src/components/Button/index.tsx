import { FC } from "react";
import ContainedButton from "./Contained";
import TextButton from "./Text";
import { ButtonProps } from "./types";

type ButtonContainerProps = ButtonProps & {
  variant?: "contained" | "text";
};

const Button: FC<ButtonContainerProps> = (props) => {
  switch (props.variant) {
    case "text":
      return <TextButton {...props} />;
    default:
      return <ContainedButton {...props} />;
  }
};

export default Button;
