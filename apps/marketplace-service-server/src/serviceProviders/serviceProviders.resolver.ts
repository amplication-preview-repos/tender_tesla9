import * as graphql from "@nestjs/graphql";
import { ServiceProvidersResolverBase } from "./base/serviceProviders.resolver.base";
import { ServiceProviders } from "./base/ServiceProviders";
import { ServiceProvidersService } from "./serviceProviders.service";

@graphql.Resolver(() => ServiceProviders)
export class ServiceProvidersResolver extends ServiceProvidersResolverBase {
  constructor(protected readonly service: ServiceProvidersService) {
    super(service);
  }
}
