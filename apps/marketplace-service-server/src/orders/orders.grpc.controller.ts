import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OrdersService } from "./orders.service";
import { OrdersGrpcControllerBase } from "./base/orders.grpc.controller.base";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrdersGrpcController extends OrdersGrpcControllerBase {
  constructor(protected readonly service: OrdersService) {
    super(service);
  }
}
