import { FC } from "react";
import NotificationItem from "./NotificationItem";
import { NOTIFICATION_TYPE } from "@/types/notification";

type NotificationMenuProps = {
  visible: boolean;
};

const NotificationMenu: FC<NotificationMenuProps> = ({ visible }) => {
  return (
    <div
      className={`rounded-[10px] px-[15px] fixed top-[72px] w-[400px] right-[20px] bg-white dark:bg-black transition-all max-h-[700px] overflow-hidden ${visible ? "h-fit-content py-[20px]" : "h-0 py-0"}`}
    >
      <NotificationItem
        notification={{
          content: "You have won million",
          id: "Zalupa",
          type: NOTIFICATION_TYPE.AgreementCreate,
          createdAt: "2024-05-29T16:02:53.998Z",
        }}
      />
      <NotificationItem
        notification={{
          content: "You have won million",
          id: "Zalupa",
          type: NOTIFICATION_TYPE.AgreementCreate,
          createdAt: "2024-05-29T16:02:53.998Z",
        }}
      />
    </div>
  );
};

export default NotificationMenu;
