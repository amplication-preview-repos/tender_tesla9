import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CustomersService } from "./customers.service";
import { CustomersGrpcControllerBase } from "./base/customers.grpc.controller.base";

@swagger.ApiTags("customers")
@common.Controller("customers")
export class CustomersGrpcController extends CustomersGrpcControllerBase {
  constructor(protected readonly service: CustomersService) {
    super(service);
  }
}
