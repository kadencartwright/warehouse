import { ObjectType, Field, ID } from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;
  @Field(() => String, { description: "the first name of the user" })
  firstName: string;

  @Field(() => String, { description: "the last name of the user" })
  lastName: string;

  @Field(() => String, {
    description:
      "the password for the user. Must be 12-64 characters, include at least 1 number, and at least 1 special character",
  })
  passwordHash: string;

  @Field(() => String, {
    description:
      "the primary contact email of the user. This will also be the user's login username",
  })
  email: string;
}
