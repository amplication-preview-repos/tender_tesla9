import { Customers } from "../customers/Customers";
import { Listings } from "../listings/Listings";

export type Orders = {
  createdAt: Date;
  customer?: Customers | null;
  id: string;
  listing?: Listings | null;
  orderDate: Date | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
