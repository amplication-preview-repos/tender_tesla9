import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { MaterialsWhereUniqueInput } from "../materials/MaterialsWhereUniqueInput";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";
import { ServiceProvidersWhereUniqueInput } from "../serviceProviders/ServiceProvidersWhereUniqueInput";

export type ListingsWhereInput = {
  address?: StringNullableFilter;
  availableFrom?: DateTimeNullableFilter;
  availableTo?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  geoLocation?: JsonFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  material?: MaterialsWhereUniqueInput;
  ordersItems?: OrdersListRelationFilter;
  serviceProvider?: ServiceProvidersWhereUniqueInput;
  title?: StringNullableFilter;
};
