import { OrdersUpdateManyWithoutCustomersItemsInput } from "./OrdersUpdateManyWithoutCustomersItemsInput";

export type CustomersUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  ordersItems?: OrdersUpdateManyWithoutCustomersItemsInput;
  phoneNumber?: string | null;
};
