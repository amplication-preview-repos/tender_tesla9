import * as graphql from "@nestjs/graphql";
import { ProjectsResolverBase } from "./base/projects.resolver.base";
import { Projects } from "./base/Projects";
import { ProjectsService } from "./projects.service";

@graphql.Resolver(() => Projects)
export class ProjectsResolver extends ProjectsResolverBase {
  constructor(protected readonly service: ProjectsService) {
    super(service);
  }
}
