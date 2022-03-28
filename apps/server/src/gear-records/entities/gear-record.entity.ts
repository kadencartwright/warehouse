import { ObjectType, Field, ID } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity("gear_records")
export class GearRecord {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: "Example field (placeholder)" })
  id: number;

  @Column()
  @Field(() => String, { description: "the name of the piece of gear" })
  name: string;

  @Column()
  @Field(() => String, { description: "the MSRP of the piece of gear" })
  msrp: string;

  @Column()
  @Field(() => String, { description: "the actual cost of the piece of gear" })
  actualCost: string;

  @Column()
  @Field(() => Date, { description: "the date the piece of gear was acquired" })
  acquiredOn: Date;

  @Column()
  @Field(() => String, {
    description: "the serial number of the piece of gear",
  })
  serialNumber: string;

  @Column()
  @Field(() => String, {
    description: "the serial number of the piece of gear",
  })
  modelNumber: string;

  @Column()
  @Field(() => String, {
    description: "the manufacturer of the piece of gear",
  })
  manufacturer: string;

  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User, (user) => user.gearRecords)
  user: User;
}
