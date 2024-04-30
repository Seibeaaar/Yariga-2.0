import { FC } from "react";
import { ButtonProps } from "./types";

const TextButton: FC<ButtonProps> = (props) => {
  if (props.disabled) {
    return (
      <button
        {...props}
        className={`w-full py-[10px] border-none cursor-not-allowed text-gray-700 outline-none bg-transparent ${props.className}`}
      >
        <p className="font-semibold text-base text-center">{props.text}</p>
      </button>
    );
  }
  return (
    <button
      {...props}
      className={`transition-all w-full py-[10px] border-none text-primary hover:text-primary-light hover:dark:text-primary-dark outline-none ${props.className}`}
    >
      <p className="font-semibold text-base text-center">{props.text}</p>
    </button>
  );
};

export default TextButton;