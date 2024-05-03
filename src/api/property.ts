import instance from ".";
import { Property, PropertyData } from "@/types/property";

export const addPropertyRequest = async (data: PropertyData): Promise<Property> => {
  const result = await instance.post("/property/add", data);
  return result.data;
};
