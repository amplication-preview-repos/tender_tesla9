import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMERS_TITLE_FIELD } from "./CustomersTitle";
import { LISTINGS_TITLE_FIELD } from "../listings/ListingsTitle";

export const CustomersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="FirstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="LastName" source="lastName" />
        <TextField label="PhoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Orders"
          target="customerId"
          label="OrdersItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
