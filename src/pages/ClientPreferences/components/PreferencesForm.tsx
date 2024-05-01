import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AREA_LIMIT,
  BED_LIMIT,
  FLOOR_LIMIT,
  PRICE_LIMIT,
  PropertyFilters,
  ROOM_LIMIT,
} from "@/types/property";
import { useDispatch } from "react-redux";
import { setClientPreferences } from "@/redux/actions/profile";
import { CLIENT_PREFERENCES_VALIDATION } from "@/schemas/profile";
import {
  SquareFoot,
  MeetingRoom,
  Bed,
  MapsHomeWork,
  Foundation,
  AttachMoney,
} from "@mui/icons-material";
import RangeRow from "./RangeRow";
import Button from "@/components/Button";
import {
  PROPERTY_FACILITIES_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from "@/constants/property";
import { AGREEMENT_TYPE_OPTIONS } from "@/constants/agreement";
import Selectable from "./Selectable";
import { AppDispatch } from "@/redux";

const ClientPreferencesForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CLIENT_PREFERENCES_VALIDATION),
  });
  const dispatch = useDispatch<AppDispatch>();

  const formValues = useWatch({
    control,
  });

  const isSubmitDisabled = (
    Object.values(formValues).every((v) =>
      Array.isArray(v) ? v.length === 0 : !v,
    ) || Object.keys(errors).length > 0
  );

  const onSubmit = (data: PropertyFilters) => {
    dispatch(setClientPreferences(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto px-[24px] lg:w-3/4 mt-[48px]">
      <div className="flex w-full items-center flex-wrap justify-between mb-[9px]">
        <RangeRow
          label="Price"
          prefix={<AttachMoney />}
          max={PRICE_LIMIT.Max}
          min={PRICE_LIMIT.Min}
          control={control}
          highestName="topPrice"
          lowestName="bottomPrice"
          highestError={errors?.topPrice?.message}
          lowestError={errors?.bottomPrice?.message}
        />
        <RangeRow
          label="Area"
          prefix={<SquareFoot />}
          max={AREA_LIMIT.Max}
          min={AREA_LIMIT.Min}
          control={control}
          highestName="topArea"
          lowestName="bottomArea"
          highestError={errors?.topArea?.message}
          lowestError={errors?.bottomArea?.message}
        />
        <RangeRow
          label="Number of rooms"
          prefix={<MeetingRoom />}
          max={ROOM_LIMIT.Max}
          min={ROOM_LIMIT.Min}
          control={control}
          highestName="topRoomsNumber"
          lowestName="bottomRoomsNumber"
          highestError={errors?.topRoomsNumber?.message}
          lowestError={errors?.bottomRoomsNumber?.message}
        />
        <RangeRow
          label="Number of beds"
          prefix={<Bed />}
          max={BED_LIMIT.Max}
          min={BED_LIMIT.Min}
          control={control}
          highestName="topBedsNumber"
          lowestName="bottomBedsNumber"
          highestError={errors?.topBedsNumber?.message}
          lowestError={errors?.bottomBedsNumber?.message}
        />
        <RangeRow
          label="Number of floors"
          prefix={<MapsHomeWork />}
          max={FLOOR_LIMIT.Max}
          min={FLOOR_LIMIT.Min}
          control={control}
          highestName="topFloorsNumber"
          lowestName="bottomFloorsNumber"
          highestError={errors?.topFloorsNumber?.message}
          lowestError={errors?.bottomFloorsNumber?.message}
        />
        <RangeRow
          label="Floor level"
          prefix={<Foundation />}
          max={FLOOR_LIMIT.Max}
          min={FLOOR_LIMIT.Min}
          control={control}
          highestName="topFloorLevel"
          lowestName="bottomFloorLevel"
          highestError={errors?.topFloorLevel?.message}
          lowestError={errors?.bottomFloorLevel?.message}
        />
      </div>
      <Selectable
        options={PROPERTY_TYPE_OPTIONS}
        control={control}
        fieldName="propertyType"
        values={formValues.propertyType}
        title="Select types of property you're interested in"
      />
      <Selectable
        options={AGREEMENT_TYPE_OPTIONS}
        control={control}
        fieldName="agreementType"
        values={formValues.agreementType}
        title="Select types of agreements you're looking for"
      />
      <Selectable
        options={PROPERTY_FACILITIES_OPTIONS}
        control={control}
        fieldName="facilities"
        values={formValues.facilities}
        title="Select facilities you would like to see"
      />
      <Button
        disabled={isSubmitDisabled}
        text="Add your preferences"
        className="mb-[16px]"
        type="submit"
      />
      <Button variant="text" text="Skip for now" />
    </form>
  );
};

export default ClientPreferencesForm;
