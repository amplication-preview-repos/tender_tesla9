/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Projects } from "./Projects";
import { ProjectsCountArgs } from "./ProjectsCountArgs";
import { ProjectsFindManyArgs } from "./ProjectsFindManyArgs";
import { ProjectsFindUniqueArgs } from "./ProjectsFindUniqueArgs";
import { CreateProjectsArgs } from "./CreateProjectsArgs";
import { UpdateProjectsArgs } from "./UpdateProjectsArgs";
import { DeleteProjectsArgs } from "./DeleteProjectsArgs";
import { SitesFindManyArgs } from "../../sites/base/SitesFindManyArgs";
import { Sites } from "../../sites/base/Sites";
import { ProjectsService } from "../projects.service";
@graphql.Resolver(() => Projects)
export class ProjectsResolverBase {
  constructor(protected readonly service: ProjectsService) {}

  async _projectsItemsMeta(
    @graphql.Args() args: ProjectsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Projects])
  async projectsItems(
    @graphql.Args() args: ProjectsFindManyArgs
  ): Promise<Projects[]> {
    return this.service.projectsItems(args);
  }

  @graphql.Query(() => Projects, { nullable: true })
  async projects(
    @graphql.Args() args: ProjectsFindUniqueArgs
  ): Promise<Projects | null> {
    const result = await this.service.projects(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Projects)
  async createProjects(
    @graphql.Args() args: CreateProjectsArgs
  ): Promise<Projects> {
    return await this.service.createProjects({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Projects)
  async updateProjects(
    @graphql.Args() args: UpdateProjectsArgs
  ): Promise<Projects | null> {
    try {
      return await this.service.updateProjects({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Projects)
  async deleteProjects(
    @graphql.Args() args: DeleteProjectsArgs
  ): Promise<Projects | null> {
    try {
      return await this.service.deleteProjects(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Sites], { name: "sitesItems" })
  async findSitesItems(
    @graphql.Parent() parent: Projects,
    @graphql.Args() args: SitesFindManyArgs
  ): Promise<Sites[]> {
    const results = await this.service.findSitesItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
