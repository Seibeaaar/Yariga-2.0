import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";

export type Option = {
  label: string;
  value: string;
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">> & { muiName: string };
};

type ToggleOptionProps = {
  option: Option;
  onClick: (value: string) => void;
  selected: boolean;
};

const ToggleOption: FC<ToggleOptionProps> = ({ option, onClick, selected }) => {
  const Icon = option.icon;
  return (
    <div
      onClick={() => onClick(option.value)}
      className={`flex py-[12px] px-[16px] rounded-[24px] items-center gap-[16px] ${selected ? "bg-primary" : "bg-border-light dark:bg-border-dark"} cursor-pointer hover:bg-primary hover:dark:bg-primary transition-all`}
    >
      <Icon />
      <p className="font-semibold text-lg">{option.label}</p>
    </div>
  );
};

export default ToggleOption;
