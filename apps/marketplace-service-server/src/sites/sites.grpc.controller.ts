import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SitesService } from "./sites.service";
import { SitesGrpcControllerBase } from "./base/sites.grpc.controller.base";

@swagger.ApiTags("sites")
@common.Controller("sites")
export class SitesGrpcController extends SitesGrpcControllerBase {
  constructor(protected readonly service: SitesService) {
    super(service);
  }
}
