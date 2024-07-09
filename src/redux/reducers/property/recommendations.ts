import { createSlice } from "@reduxjs/toolkit";
import { Property } from "@/types/property";
import { DEFAULT_PAGINATED_METADATA } from "@/constants/property";

type PropertyRecommendationsReducer = {
  recommnedations: Property[];
  recommendationError: string | null;
  recommendationPending: boolean;
  metadata: {
    page: number;
    pages: number;
    total: number;
  };
};

const initialState: PropertyRecommendationsReducer = {
  recommnedations: [],
  recommendationError: null,
  recommendationPending: false,
  metadata: DEFAULT_PAGINATED_METADATA,
};

const propertyRecommnedationSlice = createSlice({
  name: "propertyRecommnedations",
  initialState,
  reducers: {
    setRecommendationPending: (state, { payload }) => {
      state.recommendationPending = payload;
    },
    setRecommendationError: (state, { payload }) => {
      state.recommendationError = payload;
    },
    setRecommendations: (state, { payload }) => {
      state.recommnedations = payload;
    },
    setMetadata: (state, { payload }) => {
      state.metadata = payload;
    },
  },
});

export const {
  setMetadata,
  setRecommendationError,
  setRecommendationPending,
  setRecommendations,
} = propertyRecommnedationSlice.actions;

export default propertyRecommnedationSlice.reducer;
