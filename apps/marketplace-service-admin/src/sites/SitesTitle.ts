import { Sites as TSites } from "../api/sites/Sites";

export const SITES_TITLE_FIELD = "siteName";

export const SitesTitle = (record: TSites): string => {
  return record.siteName?.toString() || String(record.id);
};
