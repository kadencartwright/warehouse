import { InputType, Field } from "@nestjs/graphql";
import { MaxLength, MinLength, IsEmail } from "class-validator";

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: "the first name of the user" })
  firstName: string;

  @Field(() => String, { description: "the last name of the user" })
  lastName: string;

  @Field(() => String, {
    description:
      "the password for the user. Must be 12-64 characters, include at least 1 number, and at least 1 special character",
  })
  @MaxLength(64)
  @MinLength(12)
  password: string;

  @Field(() => String, {
    description:
      "the primary contact email of the user. This will also be the user's login username",
  })
  @IsEmail()
  email: string;
}
