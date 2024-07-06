import { createSlice } from "@reduxjs/toolkit";
import { PROPERTY_STATUS, PROPERTY_TYPE, Property } from "@/types/property";
import { AGREEMENT_TYPE } from "@/types/agreement";

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
  searchResults: [
    {
      id: "665f0e7eb77e955831653122",
      title: "Playboy Mansion",
      type: PROPERTY_TYPE.House,
      area: 1488,
      status: PROPERTY_STATUS.Free,
      agreementType: AGREEMENT_TYPE.Sale,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      owner: "665f0bfa3ddf90b947dfe66a",
      photos: ["https://yariga.s3.eu-north-1.amazonaws.com/1717505661771"],
      rooms: 18,
      beds: 40,
      floors: 3,
      location: "Los Angeles",
      facilities: [],
      price: 100000,
    },
  ],
  searchError: null,
  searchPending: false,
  initialSearch: true,
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
    },
  },
});

export const {
  addOwnProperty,
  setAddPropertyError,
  setAddPropertyPending,
  setSearchResults,
  setSearchError,
  setSearchPending,
  setInitialSearch,
} = propertySlice.actions;

export default propertySlice.reducer;
