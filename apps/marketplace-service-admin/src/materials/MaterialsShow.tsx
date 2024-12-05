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

import { MATERIALS_TITLE_FIELD } from "./MaterialsTitle";
import { SERVICEPROVIDERS_TITLE_FIELD } from "../serviceProviders/ServiceProvidersTitle";

export const MaterialsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="MaterialType" source="materialType" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Quantity" source="quantity" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Listings"
          target="materialId"
          label="ListingsItems"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
