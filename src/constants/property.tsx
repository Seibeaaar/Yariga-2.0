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
import { PROPERTY_FACILITY, PROPERTY_TYPE } from "@/types/property";

export const PROPERTY_FACILITIES_OPTIONS = [
  {
    icon: Kitchen,
    label: "Kitchen",
    value: PROPERTY_FACILITY.Kitchen,
  },
  {
    icon: Balcony,
    label: "Balcony",
    value: PROPERTY_FACILITY.Balcony,
  },
  {
    icon: LocalParking,
    label: "Parking",
    value: PROPERTY_FACILITY.Parking,
  },
  {
    icon: Wifi,
    label: "Wi-Fi",
    value: PROPERTY_FACILITY.WiFI,
  },
  {
    icon: SmokingRooms,
    label: "Smoking",
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
    icon: Home,
    value: PROPERTY_TYPE.House,
  },
  {
    label: "Apartment",
    icon: Apartment,
    value: PROPERTY_TYPE.Apartment,
  },
  {
    label: "Commercial",
    icon: Factory,
    value: PROPERTY_TYPE.Commercial,
  },
  {
    label: "Hotel",
    icon: Hotel,
    value: PROPERTY_TYPE.Hotel,
  },
  {
    label: "Garage",
    icon: Warehouse,
    value: PROPERTY_TYPE.Garage,
  },
];
