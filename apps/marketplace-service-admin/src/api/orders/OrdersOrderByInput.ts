import { SortOrder } from "../../util/SortOrder";

export type OrdersOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  listingId?: SortOrder;
  orderDate?: SortOrder;
  quantity?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
