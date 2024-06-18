import { ServiceProvidersWhereInput } from "./ServiceProvidersWhereInput";
import { ServiceProvidersOrderByInput } from "./ServiceProvidersOrderByInput";

export type ServiceProvidersFindManyArgs = {
  where?: ServiceProvidersWhereInput;
  orderBy?: Array<ServiceProvidersOrderByInput>;
  skip?: number;
  take?: number;
};
