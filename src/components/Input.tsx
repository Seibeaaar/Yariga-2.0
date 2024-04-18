import { InputHTMLAttributes, FC, useMemo } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: FC<InputProps> = (props) => {
  const borderStyle = useMemo(() => {
    if (props.error) {
      return "border-danger";
    }
    return "border-border-light dark:border-border-dark";
  }, [props.error]);
  return (
    <div className="mt-[15px] w-full">
      <p className="text-sm font-medium mb-[4px]">{props.label}</p>
      <div
        className={`py-[10px] px-[12px] border ${borderStyle} rounded-[8px]`}
      >
        <input
          className="dark:[color-scheme:dark] bg-transparent w-full outline-none border-none"
          {...props}
        />
      </div>
      {props.error ? (
        <p className="text-danger text-xs mt-[4px] h-[8px]">{props.error}</p>
      ) : null}
    </div>
  );
};

export default Input;