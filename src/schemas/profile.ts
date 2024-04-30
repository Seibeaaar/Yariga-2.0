import * as yup from "yup";
import {
  PRICE_LIMIT,
  AREA_LIMIT,
  FLOOR_LIMIT,
  ROOM_LIMIT,
  BED_LIMIT,
  PROPERTY_FACILITY,
  PROPERTY_TYPE,
} from "@/types/property";
import { AGREEMENT_TYPE } from "@/types/agreement";

export const CLIENT_PREFERENCES_VALIDATION = yup.object({
  topPrice: yup
    .number()
    .min(PRICE_LIMIT.Min, "Top price too low")
    .max(PRICE_LIMIT.Max, "Top price exceeded"),
  bottomPrice: yup.number().when("topPrice", ([topPrice], schema) => {
    return topPrice
      ? schema.min(1, "Bottom price too low").max(topPrice, "Should not exceed")
      : schema;
  }),
  topArea: yup
    .number()
    .min(AREA_LIMIT.Min, "Top area too low")
    .max(AREA_LIMIT.Max, "Top area exceeded"),
  bottomArea: yup.number().when("topArea", ([topArea], schema) => {
    return topArea
      ? schema
          .min(1, "Bottom area too low")
          .max(topArea, "Should not exceed top area")
      : schema;
  }),
  topFloorLevel: yup
    .number()
    .min(FLOOR_LIMIT.Min, "Top floor level at least 1")
    .max(FLOOR_LIMIT.Max, "Top floor level should not exceed"),
  bottomFloorLevel: yup
    .number()
    .when("topFloorLevel", ([topFloorLevel], schema) => {
      return topFloorLevel
        ? schema
            .min(FLOOR_LIMIT.Min, "Bottom floor level at least 1")
            .max(topFloorLevel, "Should not exceed top floor level")
        : schema;
    }),
  topRoomsNumber: yup
    .number()
    .min(ROOM_LIMIT.Min, "Top floor level at least 1")
    .max(ROOM_LIMIT.Max, "Top floor level should not exceed"),
  bottomRoomsNumber: yup
    .number()
    .when("topFloorLevel", ([topRoomsNumber], schema) => {
      return topRoomsNumber
        ? schema
            .min(ROOM_LIMIT.Min, "Bottom floor level at least 1")
            .max(topRoomsNumber, "Should not exceed top floor level")
        : schema;
    }),
  topBedsNumber: yup
    .number()
    .min(BED_LIMIT.Min, "Top floor level at least 1")
    .max(BED_LIMIT.Max, "Top floor level should not exceed"),
  bottomBedsNumber: yup
    .number()
    .when("topBedsNumber", ([topBedsNumber], schema) => {
      return topBedsNumber
        ? schema
            .min(BED_LIMIT.Min, "Bottom floor level at least 1")
            .max(topBedsNumber, "Should not exceed top floor level")
        : schema;
    }),
  topFloorsNumber: yup
    .number()
    .min(FLOOR_LIMIT.Min, "Top floor level at least 1")
    .max(FLOOR_LIMIT.Max, "Top floor level should not exceed"),
  bottomFloorsNumber: yup
    .number()
    .when("topFloorsNumber", ([topFloorsNumber], schema) => {
      return topFloorsNumber
        ? schema
            .min(FLOOR_LIMIT.Min, "Bottom floor level at least 1")
            .max(topFloorsNumber, "Should not exceed top floor level")
        : schema;
    }),

  facilities: yup
    .array()
    .of(yup.mixed<PROPERTY_FACILITY>().oneOf(Object.values(PROPERTY_FACILITY)).required()),
  agreementType: yup
    .array()
    .of(yup.mixed<AGREEMENT_TYPE>().oneOf(Object.values(AGREEMENT_TYPE)).required()),
  propertyType: yup
    .array()
    .of(yup.mixed<PROPERTY_TYPE>().oneOf(Object.values(PROPERTY_TYPE)).required()),
});
