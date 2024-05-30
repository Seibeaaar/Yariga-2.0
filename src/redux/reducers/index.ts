import profileReducer from "./profile";
import authReducer from "./auth";
import propertyReducer from "./property";
import notificationsReducer from "./notifications";
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  profile: profileReducer,
  auth: authReducer,
  property: propertyReducer,
  notifications: notificationsReducer,
});
