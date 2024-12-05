import { SortOrder } from "../../util/SortOrder";

export type ServiceProvidersOrderByInput = {
  address?: SortOrder;
  contactEmail?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
