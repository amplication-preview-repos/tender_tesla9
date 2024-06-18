import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ListingsListRelationFilter } from "../listings/ListingsListRelationFilter";

export type ServiceProvidersWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  id?: StringFilter;
  listingsItems?: ListingsListRelationFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
};
