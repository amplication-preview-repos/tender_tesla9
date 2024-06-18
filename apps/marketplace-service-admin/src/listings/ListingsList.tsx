import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MATERIALS_TITLE_FIELD } from "../materials/MaterialsTitle";
import { SERVICEPROVIDERS_TITLE_FIELD } from "../serviceProviders/ServiceProvidersTitle";

export const ListingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ListingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="AvailableFrom" source="availableFrom" />
        <TextField label="AvailableTo" source="availableTo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
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
    </List>
  );
};
