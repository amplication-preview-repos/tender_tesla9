import { ClientOptions, Transport } from "@nestjs/microservices";
import { ConfigService } from "@nestjs/config";

const configService: ConfigService = new ConfigService();

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: [
      "materials",
      "customers",
      "listings",
      "orders",
      "serviceproviders",
      "sites",
      "projects",
      "user"
    ],
    protoPath: [
      "src/materials/materials.proto",
      "src/customers/customers.proto",
      "src/listings/listings.proto",
      "src/orders/orders.proto",
      "src/serviceproviders/serviceproviders.proto",
      "src/sites/sites.proto",
      "src/projects/projects.proto",
      "src/user/user.proto"
    ],
    url: configService.get<string>("GRPC_CLIENT_URL_PATH"),
  },
};
