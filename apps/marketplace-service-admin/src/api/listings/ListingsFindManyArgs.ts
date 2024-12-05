import { ListingsWhereInput } from "./ListingsWhereInput";
import { ListingsOrderByInput } from "./ListingsOrderByInput";

export type ListingsFindManyArgs = {
  where?: ListingsWhereInput;
  orderBy?: Array<ListingsOrderByInput>;
  skip?: number;
  take?: number;
};
