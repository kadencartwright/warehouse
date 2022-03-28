import { CreateUserInput } from "./create-user.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { IsEmail } from "class-validator";

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;

  @Field(() => String, { description: "the first name of the user" })
  firstName: string;
  @IsEmail()
  email: string;
}
