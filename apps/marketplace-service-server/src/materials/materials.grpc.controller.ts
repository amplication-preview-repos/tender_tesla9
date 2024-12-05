import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialsService } from "./materials.service";
import { MaterialsGrpcControllerBase } from "./base/materials.grpc.controller.base";

@swagger.ApiTags("materials")
@common.Controller("materials")
export class MaterialsGrpcController extends MaterialsGrpcControllerBase {
  constructor(protected readonly service: MaterialsService) {
    super(service);
  }
}
