import {
  PropertyData,
  PropertyFilters,
  UpdatePropertyPayload,
} from "@/types/property";

export const ADD_PROPERTY = "ADD_PROPERTY";
export const FILTER_PROPERTY = "FILTER_PROPERTY";
export const SEARCH_PROPERTY = "SEARCH_PROPERTY";
export const GET_RECOMMENDATIONS = "GET_RECOMMENDATIONS";
export const GET_MY_PROPERTIES = "GET_MY_PROPERTIES";
export const GET_PROPERTIES = "GET_PROPERTIES";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const DELETE_PROPERTY = "DELETE_PROPERTY";

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

export const getRecommendations = () => ({
  type: GET_RECOMMENDATIONS,
});

export const getProperties = (payload: number) => ({
  type: GET_PROPERTIES,
  payload,
});

export const getMyProperties = () => ({
  type: GET_MY_PROPERTIES,
});

export const updateProperty = (payload: UpdatePropertyPayload) => ({
  type: UPDATE_PROPERTY,
  payload,
});

export const deleteProperty = (payload: string) => ({
  type: DELETE_PROPERTY,
  payload,
});
