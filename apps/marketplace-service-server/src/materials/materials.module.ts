import { Module } from "@nestjs/common";
import { MaterialsModuleBase } from "./base/materials.module.base";
import { MaterialsService } from "./materials.service";
import { MaterialsController } from "./materials.controller";
import { MaterialsResolver } from "./materials.resolver";

@Module({
  imports: [MaterialsModuleBase],
  controllers: [MaterialsController],
  providers: [MaterialsService, MaterialsResolver],
  exports: [MaterialsService],
})
export class MaterialsModule {}
