import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ListingsServiceBase } from "./base/listings.service.base";

@Injectable()
export class ListingsService extends ListingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
