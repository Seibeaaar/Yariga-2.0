import { createSlice } from "@reduxjs/toolkit";
import { Property } from "@/types/property";

type PropertyReducer = {
  addPropertyPending: boolean;
  addPropertyError: string | null;
  myProperties: Property[];
  searchResults: Property[];
  searchPending: boolean;
  searchError: string | null;
  initialSearch: boolean;
};

const initialState: PropertyReducer = {
  myProperties: [],
  addPropertyError: null,
  addPropertyPending: false,
  searchResults: [],
  searchError: null,
  searchPending: false,
  initialSearch: true
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
    setSearchResults: (state, { payload }) => {
      state.searchResults = payload;
    },
    setSearchPending: (state, { payload }) => {
      state.searchPending = payload;
    },
    setSearchError: (state, { payload }) => {
      state.searchError = payload;
    },
    setInitialSearch: (state, { payload }) => {
      state.initialSearch = payload;
    }
  },
});

export const {
  addOwnProperty,
  setAddPropertyError,
  setAddPropertyPending,
  setSearchResults,
  setSearchError,
  setSearchPending,
  setInitialSearch
} = propertySlice.actions;

export default propertySlice.reducer;
