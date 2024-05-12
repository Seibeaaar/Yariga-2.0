import { FC, useState } from "react";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Input from "./Input";
import { Room } from "@mui/icons-material";
import { Control, Controller } from "react-hook-form";

type LocationPickerProps = {
  control: Control<any>;
  error?: string;
};

const LocationPicker: FC<LocationPickerProps> = ({ control, error }) => {
  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: "AIzaSyDqbIpfoohQchbEyeZX16MYYPV3bq7l57s",
  });
  const [location, setLocation] = useState<string>("");

  return (
    <Controller
      control={control}
      name="location"
      render={({ field: { onChange } }) => (
        <>
          <Input
            onChange={(evt) => {
              setLocation(evt.target.value);
              getPlacePredictions({ input: evt.target.value });
            }}
            label="Location"
            error={error}
            value={location}
          />
          <div className="w-full absolute rounded-[10px] overflow-hidden">
            {placePredictions.map((item) => (
              <div
                key={item?.description}
                onClick={() => {
                  setLocation(item?.description);
                  onChange(item?.description);
                  getPlacePredictions({
                    input: "",
                  });
                }}
                className="flex items-center gap-[16px] px-[16px] cursor-pointer hover:bg-primary hover:text-white dark:hover:bg-primary py-[12px] bg-bg-light dark:bg-border-dark"
              >
                <Room />
                <p className="text-inherit">{item?.description}</p>
              </div>
            ))}
          </div>
        </>
      )}
    />
  );
};

export default LocationPicker;
