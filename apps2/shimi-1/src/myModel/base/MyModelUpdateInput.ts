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
import { UserUpdateManyWithoutMyModelsInput } from "./UserUpdateManyWithoutMyModelsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class MyModelUpdateInput {
  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutMyModelsInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutMyModelsInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutMyModelsInput, {
    nullable: true,
  })
  user?: UserUpdateManyWithoutMyModelsInput;
}

export { MyModelUpdateInput as MyModelUpdateInput };
