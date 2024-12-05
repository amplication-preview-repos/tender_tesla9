import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectsServiceBase } from "./base/projects.service.base";

@Injectable()
export class ProjectsService extends ProjectsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
