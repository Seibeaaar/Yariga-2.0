import { AGREEMENT_TYPE } from "./agreement";

export enum PROPERTY_TYPE {
  Apartment = "apartment",
  House = "house",
  Garage = "garage",
  Hotel = "hotel",
  Commercial = "commercial",
}

export enum PROPERTY_STATUS {
  Sold = "sold",
  Reserved = "reserved",
  Free = "free",
}

export enum PROPERTY_AGREEMENT_TYPE {
  Sale = "sale",
  Rent = "rent",
}

export enum PROPERTY_PREFERENCE_GRADATION {
  Standard = "standard",
  Big = "big",
  Extra = "extra",
}

export enum PROPERTY_GRADATED_VALUE {
  Rooms = "rooms",
  Beds = "beds",
  Floors = "floors",
}

export enum PROPERTY_FACILITY {
  Kitchen = "kitchen",
  Balcony = "balcony",
  Parking = "parking",
  Smoking = "smoking",
  WiFI = "wiFi",
}

export enum PRICE_LIMIT {
  Min = 1,
  Max = 50000000,
}

export enum AREA_LIMIT {
  Min = 1,
  Max = 10000,
}

export enum FLOOR_LIMIT {
  Min = 1,
  Max = 100,
}

export enum ROOM_LIMIT {
  Min = 1,
  Max = 1000,
}

export enum BED_LIMIT {
  Min = 1,
  Max = 2000,
}

export type PropertyFilters = {
  topPrice?: number;
  bottomPrice?: number;
  topArea?: number;
  bottomArea?: number;
  topFloorLevel?: number;
  bottomFloorLevel?: number;
  facilities?: PROPERTY_FACILITY[];
  agreementType?: AGREEMENT_TYPE[];
  status?: PROPERTY_STATUS[];
  topRoomsNumber?: number;
  bottomRoomsNumber?: number;
  topBedsNumber?: number;
  bottomBedsNumber?: number;
  topFloorsNumber?: number;
  bottomFloorsNumber?: number;
};

export type PropertyData = {
  type: PROPERTY_TYPE;
  facilities: PROPERTY_FACILITY[];
  price: number;
  area: number;
  rooms: number;
  beds?: number;
  floors: number;
  location: string;
  floorLevel?: number;
  title: string;
  description: string;
  agreementType: AGREEMENT_TYPE;
  photos: string[];
};

export type UpdatePropertyPayload = {
  id: string;
  data: PropertyData
}

export type Property = PropertyData & {
  id: string;
  owner: string;
  status: PROPERTY_STATUS;
};

export enum PROPERTY_FILTERS_USE {
  FILTER = "filter",
  PREFERENCES = "preferences",
}

export type PropertyPaginatedResponse = {
  page: number;
  total: number;
  properties: Property[];
  pages: number;
}

export type PaginatedMetadata = {
  total: number,
  page: number,
  pages: number
}