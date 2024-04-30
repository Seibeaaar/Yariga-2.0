import { FC } from "react";
import { ButtonProps } from "./types";

const ContainedButton: FC<ButtonProps> = (props) => {
  if (props.disabled) {
    return (
      <button
        {...props}
        className={`w-full py-[10px] border cursor-not-allowed border-transparent text-primary-dark outline-none bg-gray-700 rounded-[10px] ${props.className}`}
      >
        <p className="font-semibold text-base text-center">{props.text}</p>
      </button>
    );
  }
  return (
    <button
      {...props}
      className={`transition-all w-full py-[10px] border border-primary text-white hover:bg-transparent hover:text-primary outline-none bg-primary rounded-[10px] ${props.className}`}
    >
      <p className="font-semibold text-base text-center">{props.text}</p>
    </button>
  );
};

export default ContainedButton;