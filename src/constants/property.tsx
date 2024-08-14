import {
  SmokingRooms,
  LocalParking,
  Kitchen,
  Wifi,
  Balcony,
  Home,
  Apartment,
  Warehouse,
  Factory,
  Hotel,
} from "@mui/icons-material";
import { PROPERTY_FACILITY, PROPERTY_TYPE, PaginatedMetadata } from "@/types/property";

export const PROPERTY_FACILITIES_OPTIONS = [
  {
    icon: <Kitchen fontSize="inherit" />,
    label: "Kitchen",
    value: PROPERTY_FACILITY.Kitchen,
  },
  {
    icon: <Balcony fontSize="inherit" />,
    label: "Balcony",
    value: PROPERTY_FACILITY.Balcony,
  },
  {
    icon: <LocalParking fontSize="inherit" />,
    label: "Parking area",
    value: PROPERTY_FACILITY.Parking,
  },
  {
    icon: <Wifi fontSize="inherit" />,
    label: "Wi-Fi",
    value: PROPERTY_FACILITY.WiFI,
  },
  {
    icon: <SmokingRooms fontSize="inherit" />,
    label: "Smoking area",
    value: PROPERTY_FACILITY.Smoking,
  },
];

export const PROPERTY_TYPES = [
  "house",
  "apartment",
  "hotel",
  "commercial",
  "garage",
];

export const ELEVATED_PROPERTY_TYPES = ["apartment", "hotel", "commercial"];
export const HOSTING_PROPERTY_TYPES = ["house", "apartment", "hotel"];

export const PROPERTY_STATUSES = ["free", "sold", "reserved"];

export const PROPERTY_PREFERENCE_GRADATIONS = ["standard", "big", "extra"];

/**
 * Properties have facilities that can be present or not
 * so they are boolean
 */
export const PROPERTY_FACILITIES = [
  "kitchen",
  "parking",
  "smoking",
  "balcony",
  "wiFi",
];

export const PROPERTY_TYPE_OPTIONS = [
  {
    label: "House",
    icon: <Home fontSize="inherit" />,
    value: PROPERTY_TYPE.House,
  },
  {
    label: "Apartment",
    icon: <Apartment fontSize="inherit" />,
    value: PROPERTY_TYPE.Apartment,
  },
  {
    label: "Commercial",
    icon: <Factory fontSize="inherit" />,
    value: PROPERTY_TYPE.Commercial,
  },
  {
    label: "Hotel",
    icon: <Hotel fontSize="inherit" />,
    value: PROPERTY_TYPE.Hotel,
  },
  {
    label: "Garage",
    icon: <Warehouse fontSize="inherit" />,
    value: PROPERTY_TYPE.Garage,
  },
];

export const DEFAULT_PAGINATED_METADATA: PaginatedMetadata = {
  total: 0,
  pages: 0,
  page: 0
}

export const PROPERTY_TYPE_NAME = {
  [PROPERTY_TYPE.Apartment]: 'Apartment',
  [PROPERTY_TYPE.House]: 'Private house',
  [PROPERTY_TYPE.Hotel]: 'Hotel',
  [PROPERTY_TYPE.Commercial]: 'Commercial building',
  [PROPERTY_TYPE.Garage]: 'Garage'
}