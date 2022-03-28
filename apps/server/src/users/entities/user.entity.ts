import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Session } from "../../session/entities/session.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String, { description: "the first name of the user" })
  firstName: string;

  @Column()
  @Field(() => String, { description: "the last name of the user" })
  lastName: string;

  @Column()
  passwordHash: string;

  @Column()
  @Field(() => String, {
    description:
      "the primary contact email of the user. This will also be the user's login username",
  })
  email: string;

  sessions: Session[];
}
