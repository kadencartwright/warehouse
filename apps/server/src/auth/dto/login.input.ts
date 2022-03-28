import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsString } from "class-validator";

@InputType()
export class LoginInput {
  @Field(() => String, { description: "the users login email" })
  @IsEmail()
  email: string;
  @Field(() => String, { description: "the users login password" })
  @IsString()
  password: string;
}
