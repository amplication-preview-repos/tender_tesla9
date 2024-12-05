import { InputJsonValue } from "../../types";
import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersCreateNestedManyWithoutListingsItemsInput } from "./OrdersCreateNestedManyWithoutListingsItemsInput";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsCreateInput = {
  address?: string | null;
  availableFrom?: Date | null;
  availableTo?: Date | null;
  description?: string | null;
  geoLocation?: InputJsonValue;
  latitude?: number | null;
  longitude?: number | null;
  material?: MaterialsWhereUniqueInput | null;
  ordersItems?: OrdersCreateNestedManyWithoutListingsItemsInput;
  serviceProvider?: ServiceProvidersWhereUniqueInput | null;
  title?: string | null;
};
