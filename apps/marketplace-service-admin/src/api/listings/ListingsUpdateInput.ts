import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersUpdateManyWithoutListingsItemsInput } from "./OrdersUpdateManyWithoutListingsItemsInput";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsUpdateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  description?: string | null;
  material?: MaterialsWhereUniqueInput | null;
  ordersItems?: OrdersUpdateManyWithoutListingsItemsInput;
  serviceProvider?: ServiceProvidersWhereUniqueInput | null;
  title?: string | null;
};
