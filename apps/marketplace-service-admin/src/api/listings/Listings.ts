import { JsonValue } from "type-fest";
import { Materials } from "../materials/Materials";
import { Orders } from "../orders/Orders";
import { ServiceProviders } from "../serviceProviders/ServiceProviders";

export type Listings = {
  address: string | null;
  availableFrom: Date | null;
  availableTo: Date | null;
  createdAt: Date;
  description: string | null;
  geoLocation: JsonValue;
  id: string;
  latitude: number | null;
  longitude: number | null;
  material?: Materials | null;
  ordersItems?: Array<Orders>;
  serviceProvider?: ServiceProviders | null;
  title: string | null;
  updatedAt: Date;
};
