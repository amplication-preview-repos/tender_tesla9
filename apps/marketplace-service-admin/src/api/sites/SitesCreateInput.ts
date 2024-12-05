import { InputJsonValue } from "../../types";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type SitesCreateInput = {
  address?: string | null;
  geoLocation?: InputJsonValue;
  project?: ProjectsWhereUniqueInput | null;
  siteName?: string | null;
};
