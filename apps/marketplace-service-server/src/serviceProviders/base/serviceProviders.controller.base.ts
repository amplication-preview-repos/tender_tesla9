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
import { ServiceProvidersService } from "../serviceProviders.service";
import { ServiceProvidersCreateInput } from "./ServiceProvidersCreateInput";
import { ServiceProviders } from "./ServiceProviders";
import { ServiceProvidersFindManyArgs } from "./ServiceProvidersFindManyArgs";
import { ServiceProvidersWhereUniqueInput } from "./ServiceProvidersWhereUniqueInput";
import { ServiceProvidersUpdateInput } from "./ServiceProvidersUpdateInput";
import { ListingsFindManyArgs } from "../../listings/base/ListingsFindManyArgs";
import { Listings } from "../../listings/base/Listings";
import { ListingsWhereUniqueInput } from "../../listings/base/ListingsWhereUniqueInput";

export class ServiceProvidersControllerBase {
  constructor(protected readonly service: ServiceProvidersService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ServiceProviders })
  async createServiceProviders(
    @common.Body() data: ServiceProvidersCreateInput
  ): Promise<ServiceProviders> {
    return await this.service.createServiceProviders({
      data: data,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ServiceProviders] })
  @ApiNestedQuery(ServiceProvidersFindManyArgs)
  async serviceProvidersItems(
    @common.Req() request: Request
  ): Promise<ServiceProviders[]> {
    const args = plainToClass(ServiceProvidersFindManyArgs, request.query);
    return this.service.serviceProvidersItems({
      ...args,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ServiceProviders })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async serviceProviders(
    @common.Param() params: ServiceProvidersWhereUniqueInput
  ): Promise<ServiceProviders | null> {
    const result = await this.service.serviceProviders({
      where: params,
      select: {
        address: true,
        contactEmail: true,
        createdAt: true,
        id: true,
        name: true,
        phoneNumber: true,
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
  @swagger.ApiOkResponse({ type: ServiceProviders })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateServiceProviders(
    @common.Param() params: ServiceProvidersWhereUniqueInput,
    @common.Body() data: ServiceProvidersUpdateInput
  ): Promise<ServiceProviders | null> {
    try {
      return await this.service.updateServiceProviders({
        where: params,
        data: data,
        select: {
          address: true,
          contactEmail: true,
          createdAt: true,
          id: true,
          name: true,
          phoneNumber: true,
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
  @swagger.ApiOkResponse({ type: ServiceProviders })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteServiceProviders(
    @common.Param() params: ServiceProvidersWhereUniqueInput
  ): Promise<ServiceProviders | null> {
    try {
      return await this.service.deleteServiceProviders({
        where: params,
        select: {
          address: true,
          contactEmail: true,
          createdAt: true,
          id: true,
          name: true,
          phoneNumber: true,
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

  @common.Get("/:id/listingsItems")
  @ApiNestedQuery(ListingsFindManyArgs)
  async findListingsItems(
    @common.Req() request: Request,
    @common.Param() params: ServiceProvidersWhereUniqueInput
  ): Promise<Listings[]> {
    const query = plainToClass(ListingsFindManyArgs, request.query);
    const results = await this.service.findListingsItems(params.id, {
      ...query,
      select: {
        address: true,
        availableFrom: true,
        availableTo: true,
        createdAt: true,
        description: true,
        geoLocation: true,
        id: true,
        latitude: true,
        longitude: true,

        material: {
          select: {
            id: true,
          },
        },

        serviceProvider: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/listingsItems")
  async connectListingsItems(
    @common.Param() params: ServiceProvidersWhereUniqueInput,
    @common.Body() body: ListingsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingsItems: {
        connect: body,
      },
    };
    await this.service.updateServiceProviders({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/listingsItems")
  async updateListingsItems(
    @common.Param() params: ServiceProvidersWhereUniqueInput,
    @common.Body() body: ListingsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingsItems: {
        set: body,
      },
    };
    await this.service.updateServiceProviders({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/listingsItems")
  async disconnectListingsItems(
    @common.Param() params: ServiceProvidersWhereUniqueInput,
    @common.Body() body: ListingsWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      listingsItems: {
        disconnect: body,
      },
    };
    await this.service.updateServiceProviders({
      where: params,
      data,
      select: { id: true },
    });
  }
}
