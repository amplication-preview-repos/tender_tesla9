import { ListingsCreateNestedManyWithoutMaterialsItemsInput } from "./ListingsCreateNestedManyWithoutMaterialsItemsInput";

export type MaterialsCreateInput = {
  description?: string | null;
  listingsItems?: ListingsCreateNestedManyWithoutMaterialsItemsInput;
  materialType?: "Option1" | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
};
