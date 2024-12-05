import { InputJsonValue } from "../../types";
import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersUpdateManyWithoutListingsItemsInput } from "./OrdersUpdateManyWithoutListingsItemsInput";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsUpdateInput = {
  address?: string | null;
  availableFrom?: Date | null;
  availableTo?: Date | null;
  description?: string | null;
  geoLocation?: InputJsonValue;
  latitude?: number | null;
  longitude?: number | null;
  material?: MaterialsWhereUniqueInput | null;
  ordersItems?: OrdersUpdateManyWithoutListingsItemsInput;
  serviceProvider?: ServiceProvidersWhereUniqueInput | null;
  title?: string | null;
};
