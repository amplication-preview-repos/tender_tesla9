import { Customers as TCustomers } from "../api/customers/Customers";

export const CUSTOMERS_TITLE_FIELD = "firstName";

export const CustomersTitle = (record: TCustomers): string => {
  return record.firstName?.toString() || String(record.id);
};
