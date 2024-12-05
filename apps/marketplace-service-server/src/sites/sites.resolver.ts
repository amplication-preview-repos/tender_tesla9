import * as graphql from "@nestjs/graphql";
import { SitesResolverBase } from "./base/sites.resolver.base";
import { Sites } from "./base/Sites";
import { SitesService } from "./sites.service";

@graphql.Resolver(() => Sites)
export class SitesResolver extends SitesResolverBase {
  constructor(protected readonly service: SitesService) {
    super(service);
  }
}
