import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AREA_LIMIT,
  BED_LIMIT,
  FLOOR_LIMIT,
  PRICE_LIMIT,
  ROOM_LIMIT,
} from "@/types/property";
import { CLIENT_PREFERENCES_VALIDATION } from "@/schemas/profile";
import {
  Euro,
  SquareFoot,
  MeetingRoom,
  Bed,
  MapsHomeWork,
  Foundation,
} from "@mui/icons-material";
import RangeRow from "./RangeRow";
import Button from "@/components/Button";

const ClientPreferencesForm = () => {
  const {
    control,
    formState: { dirtyFields },
  } = useForm({
    defaultValues: {
      facilities: [],
      topArea: undefined,
      bottomArea: undefined,
      topPrice: undefined,
      bottomPrice: undefined,
      topBedsNumber: undefined,
      bottomBedsNumber: undefined,
      topFloorsNumber: undefined,
      bottomFloorsNumber: undefined,
      topFloorLevel: undefined,
      bottomFloorLevel: undefined,
      topRoomsNumber: undefined,
      bottomRoomsNumber: undefined,
      agreementType: [],
    },
    resolver: yupResolver(CLIENT_PREFERENCES_VALIDATION),
  });

  return (
    <form className="mx-auto w-3/4 mt-[48px]">
      <div className="flex w-full items-center flex-wrap justify-between mb-[9px]">
        <RangeRow
          label="Price"
          prefix={<Euro />}
          max={PRICE_LIMIT.Max}
          min={PRICE_LIMIT.Min}
          control={control}
          highestName="topPrice"
          lowestName="bottomPrice"
        />
        <RangeRow
          label="Area"
          prefix={<SquareFoot />}
          max={AREA_LIMIT.Max}
          min={AREA_LIMIT.Min}
          control={control}
          highestName="topArea"
          lowestName="bottomArea"
        />
        <RangeRow
          label="Number of rooms"
          prefix={<MeetingRoom />}
          max={ROOM_LIMIT.Max}
          min={ROOM_LIMIT.Min}
          control={control}
          highestName="topRoomsNumber"
          lowestName="bottomRoomsNumber"
        />
        <RangeRow
          label="Number of beds"
          prefix={<Bed />}
          max={BED_LIMIT.Max}
          min={BED_LIMIT.Min}
          control={control}
          highestName="topBedsNumber"
          lowestName="bottomBedsNumber"
        />
        <RangeRow
          label="Number of floors"
          prefix={<MapsHomeWork />}
          max={FLOOR_LIMIT.Max}
          min={FLOOR_LIMIT.Min}
          control={control}
          highestName="topFloorsNumber"
          lowestName="bottomFloorsNumber"
        />
        <RangeRow
          label="Floor level"
          prefix={<Foundation />}
          max={FLOOR_LIMIT.Max}
          min={FLOOR_LIMIT.Min}
          control={control}
          highestName="topFloorLevel"
          lowestName="bottomFloorLevel"
        />
      </div>
      <div className="flex items-center">
        <Button
          disabled={Object.values(dirtyFields).every((t) => !t)}
          text="Add your preferences"
        />
      </div>
    </form>
  );
};

export default ClientPreferencesForm;
