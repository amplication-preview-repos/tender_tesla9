import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

import { CustomersTitle } from "../customers/CustomersTitle";
import { ListingsTitle } from "../listings/ListingsTitle";

export const OrdersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customers"
          label="Customer"
        >
          <SelectInput optionText={CustomersTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="listing.id"
          reference="Listings"
          label="Listing"
        >
          <SelectInput optionText={ListingsTitle} />
        </ReferenceInput>
        <DateTimeInput label="OrderDate" source="orderDate" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="TotalPrice" source="totalPrice" />
      </SimpleForm>
    </Edit>
  );
};
