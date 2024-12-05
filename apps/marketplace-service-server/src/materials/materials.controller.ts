import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MaterialsService } from "./materials.service";
import { MaterialsControllerBase } from "./base/materials.controller.base";

@swagger.ApiTags("materials")
@common.Controller("materials")
export class MaterialsController extends MaterialsControllerBase {
  constructor(protected readonly service: MaterialsService) {
    super(service);
  }
}
