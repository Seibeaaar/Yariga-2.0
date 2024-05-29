import { NOTIFICATION_TYPE } from "@/types/notification";
import WalletIcon from "@/assets/icons/Wallet.svg?react";
import CalendarIcon from "@/assets/icons/Calender.svg?react";
import MessageIcon from "@/assets/icons/Message.svg?react";

export const NOTIFICATION_STYLING_BY_CONFIG = {
    [NOTIFICATION_TYPE.AgreementCreate]: {
        icon: CalendarIcon,
        text: "Agreement created",
        background: "blue"
    },
    [NOTIFICATION_TYPE.AgreementUpdate]: {
        icon: CalendarIcon,
        text: "Agreement was updated",
        background: "warning"
    },
    [NOTIFICATION_TYPE.AgreementSuccess]: {
        icon: CalendarIcon,
        text: "Agreement accepted. Congrats!",
        background: "success"
    },
    [NOTIFICATION_TYPE.AgreementCancel]: {
        icon: CalendarIcon,
        text: "Agreement canceled",
        background: "danger"
    },
    [NOTIFICATION_TYPE.PaymentSucces]: {
        icon: WalletIcon,
        text: "Payment was received",
        background: "success"
    },
    [NOTIFICATION_TYPE.Message]: {
        icon: MessageIcon,
        text: "Message received",
        background: "blue"
    }
}
