import { PropertyData, PropertyFilters } from "@/types/property";

export const ADD_PROPERTY = "ADD_PROPERTY";
export const FILTER_PROPERTY = "FILTER_PROPERTY";
export const SEARCH_PROPERTY = "SEARCH_PROPERTY";

export const addProperty = (payload: PropertyData) => ({
  type: ADD_PROPERTY,
  payload,
});

export const filterProperty = (payload: PropertyFilters) => ({
  type: FILTER_PROPERTY,
  payload,
});

export const searchProperty = (payload: string) => ({
  type: SEARCH_PROPERTY,
  payload,
});
