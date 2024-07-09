import { put, call, takeLatest } from "redux-saga/effects";
import {
  setSearchError,
  setSearchPending,
  setProperties,
  setMetadata,
  setFilterError,
  setFilterPending,
  setGetPropertiesPending,
  setGetPropertiesError,
  cacheAppliedFilters,
  cacheSearchQuery,
} from "@/redux/reducers/property/search";
import {
  searchPropertyRequest,
  filterPropertiesRequest,
  getPropertiesRequest,
} from "@/api/property";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  SearchPropertyPayload,
  PropertyPaginatedResponse,
  FilterPropertyPayload,
} from "@/types/property";
import { generateErrorMesaage } from "@/utils/redux";
import {
  FILTER_PROPERTY,
  GET_PROPERTIES,
  SEARCH_PROPERTY,
} from "@/redux/actions/property";

function* getPropertiesSaga(
  action: PayloadAction<number>,
): Generator<unknown, void, PropertyPaginatedResponse> {
  try {
    setGetPropertiesError(null);
    setGetPropertiesPending(true);

    const { properties, total, page, pages } = yield call(
      getPropertiesRequest,
      action.payload,
    );
    yield put(setProperties(properties));
    yield put(
      setMetadata({
        total,
        page,
        pages,
      }),
    );
  } catch (e) {
    setGetPropertiesError(generateErrorMesaage(e));
  } finally {
    setGetPropertiesPending(false);
  }
}

function* searchPropertiesSaga(
  action: PayloadAction<SearchPropertyPayload>,
): Generator<unknown, void, PropertyPaginatedResponse> {
  try {
    setSearchError(null);
    setSearchPending(true);

    const { query, page: queryPage } = action.payload;

    const { properties, total, page, pages } = yield call(
      searchPropertyRequest,
      query,
      queryPage,
    );
    yield put(setProperties(properties));
    yield put(
      setMetadata({
        total,
        page,
        pages,
      }),
    );

    yield put(cacheSearchQuery(query));
  } catch (e) {
    setSearchError(generateErrorMesaage(e));
  } finally {
    setSearchPending(false);
  }
}

function* filterPropertiesSaga(
  action: PayloadAction<FilterPropertyPayload>,
): Generator<unknown, void, PropertyPaginatedResponse> {
  try {
    setFilterError(null);
    setFilterPending(true);

    const { filters, page: queryPage } = action.payload;

    const { properties, total, page, pages } = yield call(
      filterPropertiesRequest,
      filters,
      queryPage,
    );
    yield put(setProperties(properties));
    yield put(
      setMetadata({
        total,
        page,
        pages,
      }),
    );

    yield put(cacheAppliedFilters(filters));
  } catch (e) {
    setFilterError(generateErrorMesaage(e));
  } finally {
    setFilterPending(false);
  }
}

export default function* () {
  yield takeLatest(GET_PROPERTIES, getPropertiesSaga);
  yield takeLatest(SEARCH_PROPERTY, searchPropertiesSaga);
  yield takeLatest(FILTER_PROPERTY, filterPropertiesSaga);
}
