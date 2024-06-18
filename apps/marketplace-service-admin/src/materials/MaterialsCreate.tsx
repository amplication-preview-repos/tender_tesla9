import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { ListingsTitle } from "../listings/ListingsTitle";

export const MaterialsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceArrayInput
          source="listingsItems"
          reference="Listings"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ListingsTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="materialType"
          label="MaterialType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <NumberInput step={1} label="Quantity" source="quantity" />
      </SimpleForm>
    </Create>
  );
};
