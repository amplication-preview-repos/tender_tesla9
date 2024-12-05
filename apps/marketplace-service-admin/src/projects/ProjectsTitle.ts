import { Projects as TProjects } from "../api/projects/Projects";

export const PROJECTS_TITLE_FIELD = "projectName";

export const ProjectsTitle = (record: TProjects): string => {
  return record.projectName?.toString() || String(record.id);
};
