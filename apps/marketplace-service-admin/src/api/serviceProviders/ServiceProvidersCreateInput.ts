import { ListingsCreateNestedManyWithoutServiceProvidersItemsInput } from "./ListingsCreateNestedManyWithoutServiceProvidersItemsInput";

export type ServiceProvidersCreateInput = {
  address?: string | null;
  contactEmail?: string | null;
  listingsItems?: ListingsCreateNestedManyWithoutServiceProvidersItemsInput;
  name?: string | null;
  phoneNumber?: string | null;
};
