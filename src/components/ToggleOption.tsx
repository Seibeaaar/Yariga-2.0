import { Option } from "@/types/common";
import { FC } from "react";

type ToggleOptionProps = {
  option: Option;
  onClick: (value: string) => void;
  selected: boolean;
};

const ToggleOption: FC<ToggleOptionProps> = ({ option, onClick, selected }) => {
  return (
    <div
      onClick={() => onClick(option.value)}
      className={`flex py-[12px] px-[24px] hover:text-white text-2xl rounded-[36px] items-center gap-[16px] ${selected ? "bg-primary text-white" : "bg-border-light dark:bg-border-dark"} cursor-pointer hover:bg-primary hover:dark:bg-primary transition-all`}
    >
      {option.icon}
      <p className="font-semibold text-lg text-inherit">{option.label}</p>
    </div>
  );
};

export default ToggleOption;
