import { Module } from "@nestjs/common";
import { ProjectsModuleBase } from "./base/projects.module.base";
import { ProjectsService } from "./projects.service";
import { ProjectsController } from "./projects.controller";
import { ProjectsResolver } from "./projects.resolver";

@Module({
  imports: [ProjectsModuleBase],
  controllers: [ProjectsController],
  providers: [ProjectsService, ProjectsResolver],
  exports: [ProjectsService],
})
export class ProjectsModule {}
