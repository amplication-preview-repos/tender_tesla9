import { ListingsUpdateManyWithoutMaterialsItemsInput } from "./ListingsUpdateManyWithoutMaterialsItemsInput";

export type MaterialsUpdateInput = {
  description?: string | null;
  listingsItems?: ListingsUpdateManyWithoutMaterialsItemsInput;
  materialType?: "Option1" | null;
  name?: string | null;
  price?: number | null;
  quantity?: number | null;
};
