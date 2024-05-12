import { InputHTMLAttributes, FC, useState } from "react";

type TextareaProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  prefixIcon?: React.ReactNode;
};

const Textarea: FC<TextareaProps> = (props) => {
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
    <div className="mt-[10px] w-full">
      {props.label ? (
        <p className="text-sm font-medium mb-[4px]">{props.label}</p>
      ) : null}
      <div
        className={`py-[10px] px-[12px] border flex gap-[8px] ${calculateBorderStyle()} rounded-[8px]`}
      >
        {props.prefixIcon}
        <textarea
          className="dark:[color-scheme:dark] resize-none bg-transparent w-full outline-none border-none"
          {...props}
          onFocus={focus}
          onBlur={blur}
        />
      </div>
      <p className="text-danger text-xs my-[5px]">
        {props.error ?? ""}
      </p>
    </div>
  );
};

export default Textarea;
