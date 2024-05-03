import { createSlice } from "@reduxjs/toolkit";
import { Property } from "@/types/property";

type PropertyReducer = {
  addPropertyPending: boolean;
  addPropertyError: string | null;
  myProperties: Property[];
};

const initialState: PropertyReducer = {
  myProperties: [],
  addPropertyError: null,
  addPropertyPending: false,
};

export const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    addOwnProperty: (state, { payload }) => {
      state.myProperties.push(payload);
    },
    setAddPropertyPending: (state, { payload }) => {
      state.addPropertyPending = payload;
    },
    setAddPropertyError: (state, { payload }) => {
      state.addPropertyError = payload;
    },
  },
});

export const { addOwnProperty, setAddPropertyError, setAddPropertyPending } =
  propertySlice.actions;

export default propertySlice.reducer;
