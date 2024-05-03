import { takeLatest, put, call } from "redux-saga/effects";
import { addPropertyRequest } from "@/api/property";
import {
  setAddPropertyError,
  setAddPropertyPending,
  addOwnProperty,
} from "../reducers/property";
import { Property, PropertyData } from "@/types/property";
import { ADD_PROPERTY } from "../actions/property";

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

export default function* () {
  yield takeLatest(ADD_PROPERTY, addPropertySaga);
}
