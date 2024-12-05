import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ServiceProvidersService } from "./serviceProviders.service";
import { ServiceProvidersGrpcControllerBase } from "./base/serviceProviders.grpc.controller.base";

@swagger.ApiTags("serviceProviders")
@common.Controller("serviceProviders")
export class ServiceProvidersGrpcController extends ServiceProvidersGrpcControllerBase {
  constructor(protected readonly service: ServiceProvidersService) {
    super(service);
  }
}
