import instance from ".";
import {
  Property,
  PropertyData,
  PropertyFilters,
  PropertyPaginatedResponse,
  UpdatePropertyPayload,
} from "@/types/property";

export const addPropertyRequest = async (
  data: PropertyData,
): Promise<Property> => {
  const result = await instance.post("/property/add", data);
  return result.data;
};

export const updatePropertyRequest = async (
  payload: UpdatePropertyPayload,
): Promise<Property> => {
  const { id, data } = payload;
  const result = await instance.put(`/property/update/${id}`, data);
  return result.data;
};

export const deletePropertyRequest = async (id: string) => {
  await instance.delete(`/property/delete/${id}`);
};

export const getMyPropertiesRequest = async (): Promise<PropertyPaginatedResponse> => {
  const result = await instance.get('/property/mine');
  return result.data;
};

export const searchPropertyRequest = async (
  searchQuery: string,
  page: number,
): Promise<PropertyPaginatedResponse> => {
  const result = await instance.post(`/property/search/?q=${searchQuery}&page=${page}`);
  return result.data;
};

export const filterPropertiesRequest = async (
  filters: PropertyFilters,
  page: number,
): Promise<PropertyPaginatedResponse> => {
  const result = await instance.post(`/property/filter?page=${page}`, filters);
  return result.data;
};

export const getPropertiesRequest = async (
  page: number,
): Promise<PropertyPaginatedResponse> => {
  const result = await instance.get(`/property?page=${page}`);
  return result.data;
};

export const getRecommendationsRequest = async (
  page: number,
): Promise<PropertyPaginatedResponse> => {
  const result = await instance.get(`/recommendations?page=${page}`);
  return result.data;
};
