import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Notification } from "@/types/notification";
import { FC } from "react";
import { NOTIFICATION_STYLING_BY_CONFIG } from "@/constants/notification";

type NotificationProps = {
  notification: Notification;
};

dayjs.extend(relativeTime)

const NotificationItem: FC<NotificationProps> = ({ notification }) => {
  const { type, content, createdAt } = notification;

  const { icon: Icon, text, background } = NOTIFICATION_STYLING_BY_CONFIG[type];

  return (
    <div
      className="flex gap-[10px] pt-[20px] cursor-pointer py-[10px] border-b pb-[20px] border-border-light dark:border-border-dark transition-all hover:bg-border-light"
    >
      <div
        className={`bg-${background} h-[38px] w-[38px] rounded-[5px] flex items-center justify-center`}
      >
        <Icon fill="white" width={18} height={18} />
      </div>
      <div>
        <p className="text-sm font-semibold text-primary-light dark:text-primary-dark">
          {text}
        </p>
        <p className="text-xsm text-secondary-light dark:text-secondary-dark">
          {content}
        </p>
        <p className="text-sm text-primary-light dark:text-primary-dark mt-[8px]">{dayjs(createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default NotificationItem;
