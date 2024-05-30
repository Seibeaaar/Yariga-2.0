import { Notification } from "@/types/notification";
import { createSlice } from "@reduxjs/toolkit";

type NotificationReducer = {
  notifications: Notification[];
  getNotificationsPending: boolean;
  getNotificationsError: string | null;
};

const initialState: NotificationReducer = {
  notifications: [],
  getNotificationsError: null,
  getNotificationsPending: false,
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    setNotifications: (state, { payload }) => {
      state.notifications = payload;
    },
    setGetNotificationsError: (state, { payload }) => {
      state.getNotificationsError = payload;
    },
    setGetNotificationsPending: (state, { payload }) => {
      state.getNotificationsPending = payload;
    },
  },
});

export const {
  setGetNotificationsError,
  setGetNotificationsPending,
  setNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
