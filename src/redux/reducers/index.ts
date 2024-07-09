import profileReducer from "./profile";
import authReducer from "./auth";
import notificationsReducer from "./notifications";
import propertySearchReducer from './property/search';
import propertyRecommendationsReducer from './property/recommendations';
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
  profile: profileReducer,
  auth: authReducer,
  notifications: notificationsReducer,
  propertySearch: propertySearchReducer,
  propertyRecommnedations: propertyRecommendationsReducer
});
