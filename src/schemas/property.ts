import * as yup from "yup";
import {
  AREA_LIMIT,
  PRICE_LIMIT,
  PROPERTY_TYPE,
  ROOM_LIMIT,
  BED_LIMIT,
  FLOOR_LIMIT,
  PROPERTY_FACILITY,
} from "@/types/property";
import {
  ELEVATED_PROPERTY_TYPES,
  HOSTING_PROPERTY_TYPES,
} from "@/constants/property";
import { AGREEMENT_TYPE } from "@/types/agreement";

export const PROPERTY_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Property title required"),
  description: yup
    .string()
    .required("Property description required")
    .min(100, "Description must be longer than 100 characters"),
  area: yup
    .number()
    .required("Area of a property required")
    .min(AREA_LIMIT.Min, "Area cannot be less than 1 sq.m.")
    .max(AREA_LIMIT.Max, "Area cannot be larger than 10000 sq.m."),
  price: yup
    .number()
    .required("Price required")
    .min(PRICE_LIMIT.Min, "Price cannot be lower than 1$")
    .max(PRICE_LIMIT.Max, "Price cannot be higher than 50M $"),
  type: yup
    .string()
    .required("Property type required")
    .oneOf(Object.values(PROPERTY_TYPE), "Invalid property type"),
  rooms: yup
    .number()
    .required("Number of rooms required")
    .min(ROOM_LIMIT.Min, "At least one room")
    .max(ROOM_LIMIT.Max, "Max rooms - 1000"),
  beds: yup.number().when("type", ([type], schema) => {
    return HOSTING_PROPERTY_TYPES.includes(type)
      ? schema
          .required("Number of beds required")
          .min(BED_LIMIT.Min, "At least one bed")
          .max(BED_LIMIT.Max, "Top number of beds - 2000")
      : schema;
  }),
  floors: yup
    .number()
    .required("Number of floors required")
    .min(FLOOR_LIMIT.Min, "At least one floor")
    .max(FLOOR_LIMIT.Max, "Should not exceed 100 floors"),
  location: yup.string().required("Location required"),
  floorLevel: yup.number().when("type", ([type], schema) => {
    return ELEVATED_PROPERTY_TYPES.includes(type)
      ? schema.required().min(1, "Should be at least on the first floor")
      : schema;
  }),
  facilities: yup
    .array()
    .ensure()
    .required()
    .of(yup.string().oneOf(Object.values(PROPERTY_FACILITY)).required()),
  agreementType: yup.string().oneOf(Object.values(AGREEMENT_TYPE)).required(),
});
