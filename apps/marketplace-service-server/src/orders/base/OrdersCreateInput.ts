/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CustomersWhereUniqueInput } from "../../customers/base/CustomersWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { ListingsWhereUniqueInput } from "../../listings/base/ListingsWhereUniqueInput";

@InputType()
class OrdersCreateInput {
  @ApiProperty({
    required: false,
    type: () => CustomersWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomersWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomersWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomersWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ListingsWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ListingsWhereUniqueInput)
  @IsOptional()
  @Field(() => ListingsWhereUniqueInput, {
    nullable: true,
  })
  listing?: ListingsWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  quantity?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number | null;
}

export { OrdersCreateInput as OrdersCreateInput };
