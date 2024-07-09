import { PROPERTY_STATUS, PROPERTY_TYPE, Property, PropertyFilters } from "@/types/property";
import { AGREEMENT_TYPE } from "@/types/agreement";
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
};

const initialState: PropertySearchReducer = {
  searchError: null,
  searchPending: false,
  properties: [
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
      }
  ],
  filterError: null,
  filterPending: false,
  appliedFilters: {},
  searchQuery: "",
  metadata: DEFAULT_PAGINATED_METADATA,
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
} = propertySearchSlice.actions;

export default propertySearchSlice.reducer;
