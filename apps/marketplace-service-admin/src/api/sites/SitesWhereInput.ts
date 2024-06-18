import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type SitesWhereInput = {
  address?: StringNullableFilter;
  geoLocation?: JsonFilter;
  id?: StringFilter;
  project?: ProjectsWhereUniqueInput;
  siteName?: StringNullableFilter;
};
