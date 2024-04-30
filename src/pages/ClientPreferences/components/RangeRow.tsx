import Input from "@/components/Input";
import { FC } from "react";
import { Control, Controller } from "react-hook-form";

type RangeRowProps = {
  label: string;
  lowestName: string;
  highestName: string;
  control: Control;
  max: number;
  min: number;
  prefix: React.ReactElement;
  lowestError?: string;
  highestError?: string;
};

const RangeRow: FC<RangeRowProps> = ({
  highestName,
  lowestName,
  control,
  prefix,
  max,
  min,
  label,
  highestError,
  lowestError,
}) => {
  return (
    <div className="w-[47.5%] mb-[24px]">
      <h4 className="text-lg font-medium">{label}:</h4>
      <div className="flex gap-[12px] items-end w-full">
        <Controller
          control={control}
          name={lowestName}
          render={({ field: { onChange } }) => (
            <div className="w-[45%]">
              <Input
                placeholder="From"
                prefix={prefix}
                onChange={onChange}
                type="number"
                max={max}
                min={min}
                error={lowestError}
              />
            </div>
          )}
        />
        <div className="h-[1px] w-[24px] bg-secondary-dark mb-[40px]" />
        <Controller
          control={control}
          name={highestName}
          render={({ field: { onChange } }) => (
            <div className="w-[45%]">
              <Input
                placeholder="To"
                prefix={prefix}
                onChange={onChange}
                type="number"
                max={max}
                min={min}
                error={highestError}
              />
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default RangeRow;
