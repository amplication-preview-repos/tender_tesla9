import { registerEnumType } from "@nestjs/graphql";

export enum MaterialType {
    Sand = "Sand",
    Gravel = "Gravel",
    Soil = "Soil",
    Concrete = "Concrete",
    Asphalt = "Asphalt",
    Limestone = "Limestone",
    Clay = "Clay"
}

registerEnumType(MaterialType, {
    name: "MaterialType",
  });