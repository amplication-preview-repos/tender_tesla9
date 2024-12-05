import { SitesCreateNestedManyWithoutProjectsItemsInput } from "./SitesCreateNestedManyWithoutProjectsItemsInput";

export type ProjectsCreateInput = {
  description?: string | null;
  projectName?: string | null;
  sitesItems?: SitesCreateNestedManyWithoutProjectsItemsInput;
};
