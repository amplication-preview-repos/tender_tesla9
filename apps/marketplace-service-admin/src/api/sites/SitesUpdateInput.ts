import { InputJsonValue } from "../../types";
import { ProjectsWhereUniqueInput } from "../projects/ProjectsWhereUniqueInput";

export type SitesUpdateInput = {
  address?: string | null;
  geoLocation?: InputJsonValue;
  project?: ProjectsWhereUniqueInput | null;
  siteName?: string | null;
};
