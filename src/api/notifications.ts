import instance from ".";
import { Notification } from "@/types/notification";

export const getNotificationsRequest = async (): Promise<Notification[]> => {
  const result = await instance.get("/notifications");
  return result.data;
};
