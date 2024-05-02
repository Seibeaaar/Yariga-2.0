import profileReducer from "./profile";
import authReducer from './auth';
import { combineReducers } from "@reduxjs/toolkit";

export default combineReducers({
    profile: profileReducer,
    auth: authReducer
})