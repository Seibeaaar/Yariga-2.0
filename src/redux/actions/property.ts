import { PropertyData } from "@/types/property";

export const ADD_PROPERTY = 'ADD_PROPERTY';

export const addProperty = (payload: PropertyData) => ({
    type: ADD_PROPERTY,
    payload
});