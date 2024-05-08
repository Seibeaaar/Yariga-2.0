import { AGREEMENT_TYPE } from "@/types/agreement";
import { CalendarMonth, Sell } from "@mui/icons-material";

export const AGREEMENT_TYPES = ["sale", "rent"];

export const AGREEMENT_STATUSES = [
  "pending",
  "settled",
  "completed",
  "changed",
  "declined",
];

export const AGREEMENT_TYPE_OPTIONS = [
  {
    label: "Sale",
    icon: <Sell fontSize="large" />,
    value: AGREEMENT_TYPE.Sale,
  },
  {
    label: "Rent",
    icon: <CalendarMonth fontSize="large" />,
    value: AGREEMENT_TYPE.Rent,
  },
];
