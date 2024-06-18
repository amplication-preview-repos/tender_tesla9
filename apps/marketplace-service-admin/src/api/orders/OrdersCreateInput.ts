import { CustomersWhereUniqueInput } from "../customers/CustomersWhereUniqueInput";
import { ListingsWhereUniqueInput } from "../listings/ListingsWhereUniqueInput";

export type OrdersCreateInput = {
  customer?: CustomersWhereUniqueInput | null;
  listing?: ListingsWhereUniqueInput | null;
  orderDate?: Date | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
