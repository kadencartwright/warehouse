import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Column, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
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
}
