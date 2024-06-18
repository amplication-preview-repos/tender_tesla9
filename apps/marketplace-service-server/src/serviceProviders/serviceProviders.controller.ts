import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceProvidersService } from "./serviceProviders.service";
import { ServiceProvidersControllerBase } from "./base/serviceProviders.controller.base";

@swagger.ApiTags("serviceProviders")
@common.Controller("serviceProviders")
export class ServiceProvidersController extends ServiceProvidersControllerBase {
  constructor(protected readonly service: ServiceProvidersService) {
    super(service);
  }
}
