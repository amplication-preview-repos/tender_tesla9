import { JsonValue } from "type-fest";
import { Projects } from "../projects/Projects";

export type Sites = {
  address: string | null;
  createdAt: Date;
  geoLocation: JsonValue;
  id: string;
  project?: Projects | null;
  siteName: string | null;
  updatedAt: Date;
};
