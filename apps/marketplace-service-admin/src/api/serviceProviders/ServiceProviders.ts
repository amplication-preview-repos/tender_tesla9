import { Listings } from "../listings/Listings";

export type ServiceProviders = {
  address: string | null;
  contactEmail: string | null;
  createdAt: Date;
  id: string;
  listingsItems?: Array<Listings>;
  name: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
