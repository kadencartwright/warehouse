import { InputType, Field } from "@nestjs/graphql";
import {
  MaxLength,
  MinLength,
  IsEmail,
  Matches,
  IsString,
} from "class-validator";
import { Match } from "../decorators/match.decorator";
const passwordRequirementString =
  'Must be 12-64 characters, include at least 1 number, at least 1 uppercase letter, at least 1 lowercase letter and at least 1 special character"';
@InputType()
export class CreateUserInput {
  @Field(() => String, { description: "the first name of the user" })
  firstName: string;

  @Field(() => String, { description: "the last name of the user" })
  lastName: string;

  @Field(() => String, {
    description: `the password for the user. ${passwordRequirementString}`,
  })
  @IsString()
  @MaxLength(64)
  @MinLength(12)
  @Matches(
    /(?=^.{12,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: passwordRequirementString }
  )
  password: string;

  @Field(() => String, {
    description: "Must match the 'password' field",
  })
  @IsString()
  @MaxLength(64)
  @MinLength(12)
  @Match("password")
  passwordConfirmation: string;

  @Field(() => String, {
    description:
      "the primary contact email of the user. This will also be the user's login username",
  })
  @IsEmail()
  email: string;
}
