import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import NotificationItem from "./NotificationItem";
import NotificationLoader from "./NotificationLoader";

type NotificationMenuProps = {
  visible: boolean;
};

const NotificationMenu: FC<NotificationMenuProps> = ({ visible }) => {
  const { notifications, getNotificationsPending, getNotificationsError } = useSelector(
    (state: RootState) => state.notifications,
  );

  const renderContent = () => {
    if (getNotificationsPending) {
      return <NotificationLoader />
    } else if (notifications.length === 0 || getNotificationsError) {
      return <h4 className="text-xl font-bold text-secondary-light dark:text-secondary-dark text-center">No notifications for you</h4>;
    } else {
      return notifications.map(n => <NotificationItem notification={n} key={n.id} />)
    }
  }

  return (
    <div
      className={`rounded-[10px] px-[15px] fixed top-[72px] w-[400px] right-[20px] bg-white dark:bg-black transition-all max-h-[700px] overflow-hidden ${visible ? "h-fit-content py-[20px]" : "h-0 py-0"}`}
    >
      {renderContent()}
    </div>
  );
};

export default NotificationMenu;
