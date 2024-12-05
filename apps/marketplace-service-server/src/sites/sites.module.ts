import { Module } from "@nestjs/common";
import { SitesModuleBase } from "./base/sites.module.base";
import { SitesService } from "./sites.service";
import { SitesController } from "./sites.controller";
import { SitesResolver } from "./sites.resolver";

@Module({
  imports: [SitesModuleBase],
  controllers: [SitesController],
  providers: [SitesService, SitesResolver],
  exports: [SitesService],
})
export class SitesModule {}
