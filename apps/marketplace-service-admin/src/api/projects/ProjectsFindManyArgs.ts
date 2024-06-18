import { ProjectsWhereInput } from "./ProjectsWhereInput";
import { ProjectsOrderByInput } from "./ProjectsOrderByInput";

export type ProjectsFindManyArgs = {
  where?: ProjectsWhereInput;
  orderBy?: Array<ProjectsOrderByInput>;
  skip?: number;
  take?: number;
};
