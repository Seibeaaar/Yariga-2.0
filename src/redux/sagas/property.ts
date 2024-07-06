import { takeLatest, put, call } from "redux-saga/effects";
import { addPropertyRequest, filterPropertiesRequest, searchPropertyRequest } from "@/api/property";
import {
  setAddPropertyError,
  setAddPropertyPending,
  addOwnProperty,
  setSearchResults,
  setSearchError,
  setSearchPending,
} from "../reducers/property";
import { Property, PropertyData, PropertyFilters } from "@/types/property";
import { ADD_PROPERTY, FILTER_PROPERTY, SEARCH_PROPERTY } from "../actions/property";

import { generateErrorMesaage } from "@/utils/redux";
import { PayloadAction } from "@reduxjs/toolkit";

function* addPropertySaga(
  action: PayloadAction<PropertyData>,
): Generator<unknown, void, Property> {
  try {
    yield put(setAddPropertyError(null));
    yield put(setAddPropertyPending(true));

    const property = yield call(addPropertyRequest, action.payload);
    yield put(addOwnProperty(property));
  } catch (e) {
    yield put(setAddPropertyError(generateErrorMesaage(e)));
  } finally {
    yield put(setAddPropertyPending(false));
  }
}

function* filterPropertySaga(
  action: PayloadAction<PropertyFilters>,
): Generator<unknown, void, Property[]> {
  try {
    yield put(setSearchError(null));
    yield put(setSearchPending(true));

    const results = yield call(filterPropertiesRequest, action.payload);
    yield put(setSearchResults(results));
  } catch (e) {
    yield put(setSearchError(generateErrorMesaage(e)));
  } finally {
    yield put(setSearchPending(false));
  }
}

function* searchPropertySaga(
  action: PayloadAction<string>,
): Generator<unknown, void, Property[]> {
  try {
    yield put(setSearchError(null));
    yield put(setSearchPending(true));
    const results = yield call(searchPropertyRequest, action.payload);
    yield put(setSearchResults(results));
  } catch (e) {
    yield put(setSearchError(generateErrorMesaage(e)));
  } finally {
    yield put(setSearchPending(false));
  }
}

export default function* () {
  yield takeLatest(ADD_PROPERTY, addPropertySaga);
  yield takeLatest(FILTER_PROPERTY, filterPropertySaga);
  yield takeLatest(SEARCH_PROPERTY, searchPropertySaga);
}
