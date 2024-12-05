import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrdersListRelationFilter } from "../orders/OrdersListRelationFilter";

export type CustomersWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  ordersItems?: OrdersListRelationFilter;
  phoneNumber?: StringNullableFilter;
};
