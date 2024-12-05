import { Orders } from "../orders/Orders";

export type Customers = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  ordersItems?: Array<Orders>;
  phoneNumber: string | null;
  updatedAt: Date;
};
