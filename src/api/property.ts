import instance from ".";
import { Property, PropertyData, PropertyFilters } from "@/types/property";

export const addPropertyRequest = async (
  data: PropertyData,
): Promise<Property> => {
  const result = await instance.post("/property/add", data);
  return result.data;
};

export const searchPropertyRequest = async (
  searchQuery: string,
): Promise<Property[]> => {
  const result = await instance.post(`/search/?q=${searchQuery}`);
  return result.data;
};

export const filterPropertiesRequest = async (
  filters: PropertyFilters,
): Promise<Property[]> => {
  const result = await instance.post("/property/filter", filters);
  return result.data;
};
