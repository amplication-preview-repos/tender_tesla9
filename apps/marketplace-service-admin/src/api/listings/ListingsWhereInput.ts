import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsWhereInput = {
  availableFrom?: DateTimeNullableFilter;
  availableTo?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  material?: MaterialsWhereUniqueInput;
  ordersItems?: OrdersListRelationFilter;
  serviceProvider?: ServiceProvidersWhereUniqueInput;
  title?: StringNullableFilter;
};
