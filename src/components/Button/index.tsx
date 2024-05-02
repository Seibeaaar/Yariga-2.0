import { FC } from "react";
import ContainedButton from "./Contained";
import TextButton from "./Text";
import OutlinedButton from './Outlined';
import { ButtonProps } from "./types";

type ButtonContainerProps = ButtonProps & {
  variant?: "contained" | "text" | 'outlined';
};

const Button: FC<ButtonContainerProps> = (props) => {
  switch (props.variant) {
    case "text":
      return <TextButton {...props} />;
    case 'outlined':
      return <OutlinedButton {...props} />
    default:
      return <ContainedButton {...props} />;
  }
};

export default Button;
