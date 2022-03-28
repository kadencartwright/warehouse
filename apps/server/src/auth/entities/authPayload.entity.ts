import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
export class AuthPayload {
  @Field(() => String, {
    description:
      "the cookie to be used when accessing private resources on the server",
  })
  cookie: string;
}
