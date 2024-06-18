import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { LISTINGS_TITLE_FIELD } from "../listings/ListingsTitle";

export const OrdersList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"OrdersItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customers.id"
          reference="Customers"
        >
          <TextField source={CUSTOMERS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Listing"
          source="listings.id"
          reference="Listings"
        >
          <TextField source={LISTINGS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="OrderDate" source="orderDate" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="TotalPrice" source="totalPrice" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
