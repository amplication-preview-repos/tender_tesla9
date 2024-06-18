import { Module } from "@nestjs/common";
import { ListingsModuleBase } from "./base/listings.module.base";
import { ListingsService } from "./listings.service";
import { ListingsController } from "./listings.controller";
import { ListingsResolver } from "./listings.resolver";

@Module({
  imports: [ListingsModuleBase],
  controllers: [ListingsController],
  providers: [ListingsService, ListingsResolver],
  exports: [ListingsService],
})
export class ListingsModule {}
