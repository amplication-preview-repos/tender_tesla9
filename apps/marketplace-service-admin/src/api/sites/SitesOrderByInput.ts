import { SortOrder } from "../../util/SortOrder";

export type SitesOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  geoLocation?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  siteName?: SortOrder;
  updatedAt?: SortOrder;
};
