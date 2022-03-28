import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class AuthPayload {
  @Field(() => String, {
    description:
      "the token to be used when accessing private resources on the server",
  })
  token: string;
}
