import { Module } from "@nestjs/common";
import { ServiceProvidersModuleBase } from "./base/serviceProviders.module.base";
import { ServiceProvidersService } from "./serviceProviders.service";
import { ServiceProvidersController } from "./serviceProviders.controller";
import { ServiceProvidersResolver } from "./serviceProviders.resolver";

@Module({
  imports: [ServiceProvidersModuleBase],
  controllers: [ServiceProvidersController],
  providers: [ServiceProvidersService, ServiceProvidersResolver],
  exports: [ServiceProvidersService],
})
export class ServiceProvidersModule {}
