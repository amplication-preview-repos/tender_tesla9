import * as graphql from "@nestjs/graphql";
import { ListingsResolverBase } from "./base/listings.resolver.base";
import { Listings } from "./base/Listings";
import { ListingsService } from "./listings.service";

@graphql.Resolver(() => Listings)
export class ListingsResolver extends ListingsResolverBase {
  constructor(protected readonly service: ListingsService) {
    super(service);
  }
}
