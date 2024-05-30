import { NOTIFICATION_TYPE } from "@/types/notification";
import WalletIcon from "@/assets/icons/Wallet.svg?react";
import CalendarIcon from "@/assets/icons/Calender.svg?react";
import MessageIcon from "@/assets/icons/Message.svg?react";
import { COLORS } from "./styling";

export const NOTIFICATION_STYLING_BY_CONFIG = {
    [NOTIFICATION_TYPE.AgreementCreate]: {
        icon: CalendarIcon,
        text: "Agreement created",
        background: COLORS.blue
    },
    [NOTIFICATION_TYPE.AgreementUpdate]: {
        icon: CalendarIcon,
        text: "Agreement was updated",
        background: COLORS.warning
    },
    [NOTIFICATION_TYPE.AgreementSuccess]: {
        icon: CalendarIcon,
        text: "Agreement accepted. Congrats!",
        background: COLORS.success
    },
    [NOTIFICATION_TYPE.AgreementCancel]: {
        icon: CalendarIcon,
        text: "Agreement canceled",
        background: COLORS.danger
    },
    [NOTIFICATION_TYPE.PaymentSucces]: {
        icon: WalletIcon,
        text: "Payment was received",
        background: COLORS.success
    },
    [NOTIFICATION_TYPE.Message]: {
        icon: MessageIcon,
        text: "Message received",
        background: COLORS.blue
    }
}
