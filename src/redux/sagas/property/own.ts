import { put, takeLatest, call } from "redux-saga/effects";
import {
  addPropertyRequest,
  updatePropertyRequest,
  deletePropertyRequest,
  getMyPropertiesRequest,
} from "@/api/property";
import {
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
  sethMyPropertiesPending,
} from "../../reducers/property/own";

import { generateErrorMesaage } from "@/utils/redux";
import {
  PropertyData,
  Property,
  UpdatePropertyPayload,
} from "@/types/property";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  ADD_PROPERTY,
  DELETE_PROPERTY,
  GET_MY_PROPERTIES,
  UPDATE_PROPERTY,
} from "@/redux/actions/property";

function* addPropertySaga(
  action: PayloadAction<PropertyData>,
): Generator<unknown, void, Property> {
  try {
    setAddPropertyPending(true);
    setAddPropertyError(null);
    const property = yield call(addPropertyRequest, action.payload);
    yield put(finishAddProperty(property));
  } catch (e) {
    setAddPropertyError(generateErrorMesaage(e));
  } finally {
    setAddPropertyPending(false);
  }
}

function* updatePropertySaga(
  action: PayloadAction<UpdatePropertyPayload>,
): Generator<unknown, void, Property> {
  try {
    setUpdatePropertyPending(true);
    setUpdatePropertyError(null);

    const property = yield call(updatePropertyRequest, action.payload);
    yield put(finishUpdateProperty(property));
  } catch (e) {
    setUpdatePropertyError(generateErrorMesaage(e));
  } finally {
    setUpdatePropertyPending(false);
  }
}

function* deletePropertySaga(
  action: PayloadAction<string>,
): Generator<unknown, void, void> {
  try {
    setDeletePropertyPending(true);
    setDeletePropertyError(null);

    yield call(deletePropertyRequest, action.payload);
    yield put(finishDeleteProperty(action.payload));
  } catch (e) {
    setDeletePropertyError(generateErrorMesaage(e));
  } finally {
    setDeletePropertyPending(false);
  }
}

function* getMyPropertiesSaga(): Generator<unknown, void, Property[]> {
  try {
    sethMyPropertiesPending(true);
    setMyPropertiesError(null);
    const properties = yield call(getMyPropertiesRequest);
    yield put(setMyProperties(properties));
  } catch (e) {
    setMyPropertiesError(generateErrorMesaage(e));
  } finally {
    sethMyPropertiesPending(false);
  }
}

export default function* () {
  yield takeLatest(ADD_PROPERTY, addPropertySaga);
  yield takeLatest(UPDATE_PROPERTY, updatePropertySaga);
  yield takeLatest(DELETE_PROPERTY, deletePropertySaga);
  yield takeLatest(GET_MY_PROPERTIES, getMyPropertiesSaga);
}
