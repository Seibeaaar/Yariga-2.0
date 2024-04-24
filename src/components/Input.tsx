import { InputHTMLAttributes, FC, useState } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: FC<InputProps> = (props) => {
  const [focused, setFocused] = useState<boolean>(false);

  const calculateBorderStyle = () => {
    switch (true) {
      case !!props.error:
        return "border-danger";
      case !!focused:
        return "border-primary";
      default:
        return "border-border-light dark:border-border-dark";
    }
  };

  const focus = () => setFocused(true);
  const blur = () => setFocused(false);

  return (
    <div className="mt-[15px] w-full">
      <p className="text-sm font-medium mb-[4px]">{props.label}</p>
      <div
        className={`py-[10px] px-[12px] border ${calculateBorderStyle()} rounded-[8px]`}
      >
        <input
          className="dark:[color-scheme:dark] bg-transparent w-full outline-none border-none"
          {...props}
          onFocus={focus}
          onBlur={blur}
        />
      </div>
      {props.error ? (
        <p className="text-danger text-xs mt-[4px] h-[8px]">{props.error}</p>
      ) : null}
    </div>
  );
};

export default Input;
