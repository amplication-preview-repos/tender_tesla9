import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServiceProvidersServiceBase } from "./base/serviceProviders.service.base";

@Injectable()
export class ServiceProvidersService extends ServiceProvidersServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
