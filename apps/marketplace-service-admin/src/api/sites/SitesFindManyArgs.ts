import { SitesWhereInput } from "./SitesWhereInput";
import { SitesOrderByInput } from "./SitesOrderByInput";

export type SitesFindManyArgs = {
  where?: SitesWhereInput;
  orderBy?: Array<SitesOrderByInput>;
  skip?: number;
  take?: number;
};
