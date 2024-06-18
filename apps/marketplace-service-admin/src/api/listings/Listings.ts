import { Materials } from "../materials/Materials";
import { Orders } from "../orders/Orders";
import { ServiceProviders } from "../serviceProviders/ServiceProviders";

export type Listings = {
  availableFrom: Date | null;
  availableTo: Date | null;
  createdAt: Date;
  description: string | null;
  id: string;
  material?: Materials | null;
  ordersItems?: Array<Orders>;
  serviceProvider?: ServiceProviders | null;
  title: string | null;
  updatedAt: Date;
};
