import { Option } from "@/components/ToggleOption";
import { FC } from "react";
import { Controller, Control } from "react-hook-form";
import ToggleOption from "@/components/ToggleOption";

type SelectableProps = {
  control: Control;
  fieldName: string;
  options: Option[];
  values?: (string | undefined)[];
  title: string;
};

const Selectable: FC<SelectableProps> = ({
  control,
  options,
  fieldName,
  values,
  title,
}) => (
  <div>
    <h3 className="font-medium text-lg">{title}:</h3>
    <Controller
      name={fieldName}
      control={control}
      render={({ field: { onChange } }) => (
        <div className="flex items-center gap-[16px] flex-wrap mb-[48px] mt-[16px]">
          {options.map((option) => (
            <ToggleOption
              option={option}
              selected={values!.includes(option.value)}
              onClick={() => {
                onChange(
                  values?.includes(option.value)
                    ? values.filter((v) => v !== option.value)
                    : [...(values || []), option.value],
                );
              }}
            />
          ))}
        </div>
      )}
    />
  </div>
);

export default Selectable;
