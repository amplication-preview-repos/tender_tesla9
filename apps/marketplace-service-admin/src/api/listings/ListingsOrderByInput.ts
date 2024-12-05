import { SortOrder } from "../../util/SortOrder";

export type ListingsOrderByInput = {
  address?: SortOrder;
  availableFrom?: SortOrder;
  availableTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  geoLocation?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  materialId?: SortOrder;
  serviceProviderId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
