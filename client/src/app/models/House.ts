export interface House {
  id: number;
  description: string;
  countryCode: string;
  city: string;
  street: string;
  streetNumber: number;
  latitude: number;
  longitude: number;
  landArea: number;
  floorArea: number;
  internalArea: number;
  roomsCount: number;
  bathroomsCount: number;
  floorsCount: number;
  parkingSpacesCount: number;
  garageSpacesCount: number;
  currency: string;
  initialPrice: number;
  price: number;
  commission: number;
  isDetached: boolean;
  hasFurniture: boolean;
  hasTerrace: boolean;
  hasBalcony: boolean;
  hasPool: boolean;
  hasBasement: boolean;
  hasRefrigerator: boolean;
  hasOven: boolean;
  hasAirConditioning: boolean;
  hasDishwasher: boolean;
  hasWashingMachine: boolean;
  epcRating: string;
  yearBuilt: number;
  availableFrom: string;
  createdAt: string;
  reservedAt: string;
  soldAt: string;
}
