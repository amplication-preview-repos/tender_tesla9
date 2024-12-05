import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SitesTitle } from "../sites/SitesTitle";

export const ProjectsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
