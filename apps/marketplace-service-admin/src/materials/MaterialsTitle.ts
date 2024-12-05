import { Materials as TMaterials } from "../api/materials/Materials";

export const MATERIALS_TITLE_FIELD = "name";

export const MaterialsTitle = (record: TMaterials): string => {
  return record.name?.toString() || String(record.id);
};
