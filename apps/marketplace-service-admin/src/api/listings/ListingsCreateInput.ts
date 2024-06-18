import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersCreateNestedManyWithoutListingsItemsInput } from "./OrdersCreateNestedManyWithoutListingsItemsInput";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsCreateInput = {
  availableFrom?: Date | null;
  availableTo?: Date | null;
  description?: string | null;
  material?: MaterialsWhereUniqueInput | null;
  ordersItems?: OrdersCreateNestedManyWithoutListingsItemsInput;
  serviceProvider?: ServiceProvidersWhereUniqueInput | null;
  title?: string | null;
};
