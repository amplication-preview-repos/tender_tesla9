import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SitesTitle } from "../sites/SitesTitle";

export const ProjectsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <TextInput label="ProjectName" source="projectName" />
        <ReferenceArrayInput
          source="sitesItems"
          reference="Sites"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SitesTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
