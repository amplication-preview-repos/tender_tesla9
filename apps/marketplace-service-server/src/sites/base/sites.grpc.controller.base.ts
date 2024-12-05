/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { SitesService } from "../sites.service";
import { SitesCreateInput } from "./SitesCreateInput";
import { SitesWhereInput } from "./SitesWhereInput";
import { SitesWhereUniqueInput } from "./SitesWhereUniqueInput";
import { SitesFindManyArgs } from "./SitesFindManyArgs";
import { SitesUpdateInput } from "./SitesUpdateInput";
import { Sites } from "./Sites";

export class SitesGrpcControllerBase {
  constructor(protected readonly service: SitesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Sites })
  @GrpcMethod("SitesService", "createSites")
  async createSites(@common.Body() data: SitesCreateInput): Promise<Sites> {
    return await this.service.createSites({
      data: {
        ...data,

        project: data.project
          ? {
              connect: data.project,
            }
          : undefined,
      },
      select: {
        address: true,
        createdAt: true,
        geoLocation: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        siteName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Sites] })
  @ApiNestedQuery(SitesFindManyArgs)
  @GrpcMethod("SitesService", "sitesItems")
  async sitesItems(@common.Req() request: Request): Promise<Sites[]> {
    const args = plainToClass(SitesFindManyArgs, request.query);
    return this.service.sitesItems({
      ...args,
      select: {
        address: true,
        createdAt: true,
        geoLocation: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        siteName: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Sites })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SitesService", "sites")
  async sites(
    @common.Param() params: SitesWhereUniqueInput
  ): Promise<Sites | null> {
    const result = await this.service.sites({
      where: params,
      select: {
        address: true,
        createdAt: true,
        geoLocation: true,
        id: true,

        project: {
          select: {
            id: true,
          },
        },

        siteName: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Sites })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SitesService", "updateSites")
  async updateSites(
    @common.Param() params: SitesWhereUniqueInput,
    @common.Body() data: SitesUpdateInput
  ): Promise<Sites | null> {
    try {
      return await this.service.updateSites({
        where: params,
        data: {
          ...data,

          project: data.project
            ? {
                connect: data.project,
              }
            : undefined,
        },
        select: {
          address: true,
          createdAt: true,
          geoLocation: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          siteName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Sites })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("SitesService", "deleteSites")
  async deleteSites(
    @common.Param() params: SitesWhereUniqueInput
  ): Promise<Sites | null> {
    try {
      return await this.service.deleteSites({
        where: params,
        select: {
          address: true,
          createdAt: true,
          geoLocation: true,
          id: true,

          project: {
            select: {
              id: true,
            },
          },

          siteName: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
