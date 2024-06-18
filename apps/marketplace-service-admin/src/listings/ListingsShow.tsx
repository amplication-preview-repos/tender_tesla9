import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMERS_TITLE_FIELD } from "../customers/CustomersTitle";
import { LISTINGS_TITLE_FIELD } from "./ListingsTitle";
import { MATERIALS_TITLE_FIELD } from "../materials/MaterialsTitle";
import { SERVICEPROVIDERS_TITLE_FIELD } from "../serviceProviders/ServiceProvidersTitle";

export const ListingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <TextField label="AvailableFrom" source="availableFrom" />
        <TextField label="AvailableTo" source="availableTo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="GeoLocation" source="geoLocation" />
        <TextField label="ID" source="id" />
        <TextField label="Latitude" source="latitude" />
        <TextField label="Longitude" source="longitude" />
        <ReferenceField
          label="Material"
          source="materials.id"
          reference="Materials"
        >
          <TextField source={MATERIALS_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="ServiceProvider"
          source="serviceproviders.id"
          reference="ServiceProviders"
        >
          <TextField source={SERVICEPROVIDERS_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Orders"
          target="listingId"
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
