import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Input from "./Input";
import { Room } from "@mui/icons-material";

const LocationPicker = () => {
  const { placePredictions, getPlacePredictions } = usePlacesService({
    apiKey: "AIzaSyDqbIpfoohQchbEyeZX16MYYPV3bq7l57s",
  });

  return (
    <>
      <Input
        onChange={(evt) => {
          getPlacePredictions({ input: evt.target.value });
        }}
        label="Location"
      />
      <div className="w-full absolute rounded-[10px] overflow-hidden">
        {placePredictions.map((item) => (
          <div
            key={item?.description}
            className="flex items-center gap-[16px] px-[16px] cursor-pointer hover:bg-primary hover:text-white dark:hover:bg-primary py-[12px] bg-bg-light dark:bg-border-dark"
          >
            <Room />
            <p className="text-inherit">{item?.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default LocationPicker;
