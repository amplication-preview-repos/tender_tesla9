import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingsListRelationFilter } from "../listings/ListingsListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MaterialsWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingsItems?: ListingsListRelationFilter;
  materialType?: "Option1";
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  quantity?: IntNullableFilter;
};
