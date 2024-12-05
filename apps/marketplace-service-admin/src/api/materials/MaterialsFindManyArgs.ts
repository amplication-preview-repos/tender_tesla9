import { MaterialsWhereInput } from "./MaterialsWhereInput";
import { MaterialsOrderByInput } from "./MaterialsOrderByInput";

export type MaterialsFindManyArgs = {
  where?: MaterialsWhereInput;
  orderBy?: Array<MaterialsOrderByInput>;
  skip?: number;
  take?: number;
};
