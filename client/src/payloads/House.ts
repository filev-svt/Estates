export interface House {
  id: number;
  description: string;
  countryCode: string;
  city: string;
  street: string;
  streetNumber: number;
  latitude: number;
  longitude: number;
  footage: number;
  landFootage: number;
  roomsCount: number;
  bathroomsCount: number;
  floorsCount: number;
  initialPrice: number;
  currency: string;
  price: number;
  isDetached: boolean;
  hasPool: boolean;
  hasGarage: boolean;
  hasParking: boolean;
  hasBasement: boolean;
  epcRating: number;
  availableFrom: string;
  createdAt: string;
  reservedAt: string;
  soldAt: string;
}
