import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectsService } from "./projects.service";
import { ProjectsControllerBase } from "./base/projects.controller.base";

@swagger.ApiTags("projects")
@common.Controller("projects")
export class ProjectsController extends ProjectsControllerBase {
  constructor(protected readonly service: ProjectsService) {
    super(service);
  }
}
