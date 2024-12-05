import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SitesServiceBase } from "./base/sites.service.base";

@Injectable()
export class SitesService extends SitesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
