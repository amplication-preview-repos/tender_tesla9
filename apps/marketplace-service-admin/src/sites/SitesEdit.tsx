import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProjectsTitle } from "../projects/ProjectsTitle";

export const SitesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" multiline source="address" />
        <div />
        <ReferenceInput
          source="project.id"
          reference="Projects"
          label="Project"
        >
          <SelectInput optionText={ProjectsTitle} />
        </ReferenceInput>
        <TextInput label="SiteName" source="siteName" />
      </SimpleForm>
    </Edit>
  );
};
