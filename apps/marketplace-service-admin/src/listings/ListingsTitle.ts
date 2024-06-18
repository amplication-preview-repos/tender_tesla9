import { Listings as TListings } from "../api/listings/Listings";

export const LISTINGS_TITLE_FIELD = "title";

export const ListingsTitle = (record: TListings): string => {
  return record.title?.toString() || String(record.id);
};
