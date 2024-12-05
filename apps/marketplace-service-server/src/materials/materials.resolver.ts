import * as graphql from "@nestjs/graphql";
import { MaterialsResolverBase } from "./base/materials.resolver.base";
import { Materials } from "./base/Materials";
import { MaterialsService } from "./materials.service";

@graphql.Resolver(() => Materials)
export class MaterialsResolver extends MaterialsResolverBase {
  constructor(protected readonly service: MaterialsService) {
    super(service);
  }
}
