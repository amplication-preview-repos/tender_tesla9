import { Listings } from "../listings/Listings";

export type Materials = {
  createdAt: Date;
  description: string | null;
  id: string;
  listingsItems?: Array<Listings>;
  materialType?: "Option1" | null;
  name: string | null;
  price: number | null;
  quantity: number | null;
  updatedAt: Date;
};
