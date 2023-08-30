/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MyModelCreateInput } from "./MyModelCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateMyModelArgs {
  @ApiProperty({
    required: true,
    type: () => MyModelCreateInput,
  })
  @ValidateNested()
  @Type(() => MyModelCreateInput)
  @Field(() => MyModelCreateInput, { nullable: false })
  data!: MyModelCreateInput;
}

export { CreateMyModelArgs as CreateMyModelArgs };
