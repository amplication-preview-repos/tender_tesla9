import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ListingsService } from "./listings.service";
import { ListingsGrpcControllerBase } from "./base/listings.grpc.controller.base";

@swagger.ApiTags("listings")
@common.Controller("listings")
export class ListingsGrpcController extends ListingsGrpcControllerBase {
  constructor(protected readonly service: ListingsService) {
    super(service);
  }
}
