import { useForm, useWatch } from "react-hook-form";
import { FC, ReactNode } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  AREA_LIMIT,
  BED_LIMIT,
  FLOOR_LIMIT,
  PRICE_LIMIT,
  PROPERTY_FILTERS_USE,
  PropertyFilters,
  ROOM_LIMIT,
} from "@/types/property";
import { useDispatch } from "react-redux";
import { setClientPreferences } from "@/redux/actions/profile";
import { filterProperty } from "@/redux/actions/property";
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
import {
  PROPERTY_FACILITIES_OPTIONS,
  PROPERTY_TYPE_OPTIONS,
} from "@/constants/property";
import { AGREEMENT_TYPE_OPTIONS } from "@/constants/agreement";
import Selectable from "@/components/Selectable";
import Block from "../Block";
import { AppDispatch } from "@/redux";

type PropertyFiltersProps = {
  mode: PROPERTY_FILTERS_USE;
  submitComponent: (isDisabled: boolean) => ReactNode;
  animated?: boolean;
};

const PropertyFiltersForm: FC<PropertyFiltersProps> = ({
  submitComponent,
  mode,
  animated = false
}) => {
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

  const isSubmitDisabled =
    Object.values(formValues).every((v) =>
      Array.isArray(v) ? v.length === 0 : !v,
    ) || Object.keys(errors).length > 0;

  const onSubmit = (data: PropertyFilters) => {
    const callback =
      mode === PROPERTY_FILTERS_USE.FILTER
        ? filterProperty
        : setClientPreferences;
    dispatch(callback(data));
  };  

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-[24px] bg-light dark:bg-black text-primary-light dark:text-primary-dark">
      <Block animated={animated}
        className="flex w-full items-center flex-wrap justify-between mb-[9px]"
      >
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
      </Block>
      <Block animated={animated}>
        <Selectable
          options={PROPERTY_TYPE_OPTIONS}
          control={control}
          fieldName="propertyType"
          values={formValues.propertyType}
          title="Select types of property you're interested in"
        />
      </Block>
      <Block animated={animated}>
        <Selectable
          options={AGREEMENT_TYPE_OPTIONS}
          control={control}
          fieldName="agreementType"
          values={formValues.agreementType}
          title="Select types of agreements you're looking for"
        />
      </Block>
      <Block animated={animated}>
        <Selectable
          options={PROPERTY_FACILITIES_OPTIONS}
          control={control}
          fieldName="facilities"
          values={formValues.facilities}
          title="Select facilities you would like to see"
        />
      </Block>
      <Block animated={animated}>
        {submitComponent(isSubmitDisabled)}
      </Block>
    </form>
  );
};

export default PropertyFiltersForm;
