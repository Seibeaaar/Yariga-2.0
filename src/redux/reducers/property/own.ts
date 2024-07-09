import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_PAGINATED_METADATA } from "@/constants/property";
import { PaginatedMetadata, Property } from "@/types/property";

type OwnPropertiesReducer = {
  addPropertyPending: boolean;
  addPropertyError: string | null;
  updatePropertyPending: boolean;
  updatePropertyError: string | null;
  deletePropertyPending: boolean;
  deletePropertyError: string | null;
  fetchMyPropertiesPending: boolean;
  fetchMyPropertiesError: string | null;
  properties: Property[];
  metadata: PaginatedMetadata;
};

const initialState: OwnPropertiesReducer = {
  addPropertyError: null,
  addPropertyPending: false,
  updatePropertyError: null,
  updatePropertyPending: false,
  deletePropertyError: null,
  deletePropertyPending: false,
  properties: [],
  metadata: DEFAULT_PAGINATED_METADATA,
  fetchMyPropertiesError: null,
  fetchMyPropertiesPending: false,
};

const ownPropertiesSlice = createSlice({
  name: "ownProperties",
  initialState,
  reducers: {
    setAddPropertyPending: (state, { payload }) => {
      state.addPropertyPending = payload;
    },
    setAddPropertyError: (state, { payload }) => {
      state.addPropertyError = payload;
    },
    finishAddProperty: (state, { payload }) => {
      state.properties.unshift(payload);
    },
    setUpdatePropertyError: (state, { payload }) => {
      state.updatePropertyError = payload;
    },
    setUpdatePropertyPending: (state, { payload }) => {
      state.updatePropertyPending = payload;
    },
    finishUpdateProperty: (state, { payload }) => {
      const updatedPropertyIndex = state.properties.findIndex(
        (property) => property.id === payload.id,
      );
      state.properties.splice(updatedPropertyIndex, 1, payload);
    },
    setDeletePropertyError: (state, { payload }) => {
      state.deletePropertyError = payload;
    },
    setDeletePropertyPending: (state, { payload }) => {
      state.deletePropertyPending = payload;
    },
    finishDeleteProperty: (state, { payload }) => {
      state.properties = state.properties.filter(
        (property) => property.id === payload,
      );
    },
    sethMyPropertiesPending: (state, { payload }) => {
      state.fetchMyPropertiesPending = payload;
    },
    setMyPropertiesError: (state, { payload }) => {
      state.fetchMyPropertiesError = payload;
    },
    setMyProperties: (state, { payload }) => {
      state.properties = payload;
    },
  },
});

export const {
  setAddPropertyError,
  setAddPropertyPending,
  setDeletePropertyError,
  setDeletePropertyPending,
  setUpdatePropertyError,
  setUpdatePropertyPending,
  finishAddProperty,
  finishDeleteProperty,
  finishUpdateProperty,
  setMyProperties,
  setMyPropertiesError,
  sethMyPropertiesPending
} = ownPropertiesSlice.actions;

export default ownPropertiesSlice.reducer;
