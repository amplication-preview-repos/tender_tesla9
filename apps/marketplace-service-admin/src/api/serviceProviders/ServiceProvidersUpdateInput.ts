import { ListingsUpdateManyWithoutServiceProvidersItemsInput } from "./ListingsUpdateManyWithoutServiceProvidersItemsInput";

export type ServiceProvidersUpdateInput = {
  address?: string | null;
  contactEmail?: string | null;
  listingsItems?: ListingsUpdateManyWithoutServiceProvidersItemsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
