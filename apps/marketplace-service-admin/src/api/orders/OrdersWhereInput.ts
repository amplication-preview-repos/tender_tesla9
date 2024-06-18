import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrdersWhereInput = {
  customer?: CustomersWhereUniqueInput;
  id?: StringFilter;
  listing?: ListingsWhereUniqueInput;
  orderDate?: DateTimeNullableFilter;
  quantity?: IntNullableFilter;
  totalPrice?: FloatNullableFilter;
};
