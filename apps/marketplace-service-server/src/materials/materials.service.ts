import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MaterialsServiceBase } from "./base/materials.service.base";

@Injectable()
export class MaterialsService extends MaterialsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
