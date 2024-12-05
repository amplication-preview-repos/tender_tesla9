import { Sites } from "../sites/Sites";

export type Projects = {
  createdAt: Date;
  description: string | null;
  id: string;
  projectName: string | null;
  sitesItems?: Array<Sites>;
  updatedAt: Date;
};
