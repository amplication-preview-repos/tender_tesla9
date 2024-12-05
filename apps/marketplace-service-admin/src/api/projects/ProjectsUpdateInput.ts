import { SitesUpdateManyWithoutProjectsItemsInput } from "./SitesUpdateManyWithoutProjectsItemsInput";

export type ProjectsUpdateInput = {
  description?: string | null;
  projectName?: string | null;
  sitesItems?: SitesUpdateManyWithoutProjectsItemsInput;
};
