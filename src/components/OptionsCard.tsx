import { FC } from "react";
import { Option } from "@/types/common";

type OptionCardProps = {
  className?: string;
  option: Option;
  selected: boolean;
  onSelect: (value: string) => void;
};

const OptionCard: FC<OptionCardProps> = ({
  className,
  selected,
  option,
  onSelect,
}) => {
  const conditionalStyles = selected
    ? "bg-primary text-primary-dark border-primary"
    : "hover:bg-primary hover:border-primary border-border-light dark:border-border-dark";
  return (
    <div
      onClick={() => onSelect(option.value)}
      className={`rounded-[16px] border-[1px] hover:text-white h-[160px] cursor-pointer p-[16px] transition-all flex flex-col items-center justify-center ${conditionalStyles} ${className}`}
    >
      {option.icon}
      <p className="text-center text-xl mt-[16px]">{option.label}</p>
    </div>
  );
};

export default OptionCard;
