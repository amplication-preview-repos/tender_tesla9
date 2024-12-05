import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SitesService } from "./sites.service";
import { SitesControllerBase } from "./base/sites.controller.base";

@swagger.ApiTags("sites")
@common.Controller("sites")
export class SitesController extends SitesControllerBase {
  constructor(protected readonly service: SitesService) {
    super(service);
  }
}
