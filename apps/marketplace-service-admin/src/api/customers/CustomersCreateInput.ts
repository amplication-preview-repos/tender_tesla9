import { OrdersCreateNestedManyWithoutCustomersItemsInput } from "./OrdersCreateNestedManyWithoutCustomersItemsInput";

export type CustomersCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  ordersItems?: OrdersCreateNestedManyWithoutCustomersItemsInput;
  phoneNumber?: string | null;
};
