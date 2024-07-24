import {
  Property,
  PropertyFilters,
} from "@/types/property";
import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_PAGINATED_METADATA } from "@/constants/property";

type PropertySearchReducer = {
  properties: Property[];
  searchPending: boolean;
  searchError: string | null;
  filterPending: boolean;
  filterError: string | null;
  searchQuery: string;
  appliedFilters: PropertyFilters;
  metadata: {
    page: number;
    pages: number;
    total: number;
  };
  getPropertiesPending: boolean;
  getPropertiesError: string | null;
};

const initialState: PropertySearchReducer = {
  searchError: null,
  searchPending: false,
  properties: [],
  filterError: null,
  filterPending: false,
  getPropertiesError: null,
  getPropertiesPending: false,
  searchQuery: "",
  metadata: DEFAULT_PAGINATED_METADATA,
  appliedFilters: {},
};

export const propertySearchSlice = createSlice({
  name: "propertySearch",
  initialState,
  reducers: {
    setSearchPending: (state, { payload }) => {
      state.searchPending = payload;
    },
    setSearchError: (state, { payload }) => {
      state.searchError = payload;
    },
    setFilterPending: (state, { payload }) => {
      state.filterPending = payload;
    },
    setFilterError: (state, { payload }) => {
      state.filterError = payload;
    },
    setProperties: (state, { payload }) => {
      state.properties = payload;
    },
    setMetadata: (state, { payload }) => {
      state.metadata = payload;
    },
    cacheSearchQuery: (state, { payload }) => {
      state.searchQuery = payload;
    },
    cacheAppliedFilters: (state, { payload }) => {
      state.appliedFilters = payload;
    },
    setGetPropertiesError: (state, { payload }) => {
      state.getPropertiesError = payload;
    },
    setGetPropertiesPending: (state, { payload }) => {
      state.getPropertiesPending = payload;
    },
    clearSearch: (state) => {
      state.searchQuery = '';
      state.appliedFilters = {};
    }
  },
});

export const {
  setFilterError,
  setFilterPending,
  setMetadata,
  setProperties,
  setSearchError,
  setSearchPending,
  cacheAppliedFilters,
  cacheSearchQuery,
  setGetPropertiesError,
  setGetPropertiesPending,
  clearSearch
} = propertySearchSlice.actions;

export default propertySearchSlice.reducer;
