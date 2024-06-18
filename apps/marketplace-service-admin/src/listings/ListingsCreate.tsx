import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { MaterialsTitle } from "../materials/MaterialsTitle";
import { OrdersTitle } from "../orders/OrdersTitle";
import { ServiceProvidersTitle } from "../serviceProviders/ServiceProvidersTitle";

export const ListingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <DateTimeInput label="AvailableFrom" source="availableFrom" />
        <DateTimeInput label="AvailableTo" source="availableTo" />
        <TextInput label="Description" multiline source="description" />
        <div />
        <NumberInput label="Latitude" source="latitude" />
        <NumberInput label="Longitude" source="longitude" />
        <ReferenceInput
          source="material.id"
          reference="Materials"
          label="Material"
        >
          <SelectInput optionText={MaterialsTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="ordersItems"
          reference="Orders"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrdersTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="serviceProvider.id"
          reference="ServiceProviders"
          label="ServiceProvider"
        >
          <SelectInput optionText={ServiceProvidersTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
