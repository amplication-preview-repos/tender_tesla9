import { SortOrder } from "../../util/SortOrder";

export type ListingsOrderByInput = {
  availableFrom?: SortOrder;
  availableTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  materialId?: SortOrder;
  serviceProviderId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
