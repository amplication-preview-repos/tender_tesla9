import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SitesListRelationFilter } from "../sites/SitesListRelationFilter";

export type ProjectsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  projectName?: StringNullableFilter;
  sitesItems?: SitesListRelationFilter;
};
