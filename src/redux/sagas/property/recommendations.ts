import { put, call, takeLatest } from "redux-saga/effects";
import {
  setRecommendations,
  setRecommendationPending,
  setRecommendationError,
  setMetadata,
} from "@/redux/reducers/property/recommendations";
import { GET_RECOMMENDATIONS } from "@/redux/actions/property";
import { PropertyPaginatedResponse } from "@/types/property";
import { generateErrorMesaage } from "@/utils/redux";
import { getRecommendationsRequest } from "@/api/property";
import { PayloadAction } from "@reduxjs/toolkit";

function* getRecommendationsSaga(
  action: PayloadAction<number>,
): Generator<unknown, void, PropertyPaginatedResponse> {
  try {
    setRecommendationError(null);
    setRecommendationPending(true);

    const { properties, page, pages, total } = yield call(
      getRecommendationsRequest,
      action.payload,
    );
    yield put(setRecommendations(properties));
    yield put(
      setMetadata({
        total,
        page,
        pages,
      }),
    );
  } catch (e) {
    setRecommendationError(generateErrorMesaage(e));
  } finally {
    setRecommendationPending(false);
  }
}

export default function* () {
  yield takeLatest(GET_RECOMMENDATIONS, getRecommendationsSaga);
}
