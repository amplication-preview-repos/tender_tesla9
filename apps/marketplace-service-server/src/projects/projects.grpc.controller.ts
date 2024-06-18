import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectsService } from "./projects.service";
import { ProjectsGrpcControllerBase } from "./base/projects.grpc.controller.base";

@swagger.ApiTags("projects")
@common.Controller("projects")
export class ProjectsGrpcController extends ProjectsGrpcControllerBase {
  constructor(protected readonly service: ProjectsService) {
    super(service);
  }
}
