import { ObjectType, Field, ID } from "@nestjs/graphql";
import { User } from "../../users/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GearRecordPhoto } from "../../gear-record-photos/entities/gear-record-photo.entity";

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
  @Field(() => String, {
    description: "the MSRP of the piece of gear",
    nullable: true,
  })
  msrp?: string;

  @Column()
  @Field(() => String, {
    description: "the actual cost of the piece of gear",
    nullable: true,
  })
  actualCost?: string;

  @Column()
  @Field(() => Date, {
    description: "the date the piece of gear was acquired",
    nullable: true,
  })
  acquiredOn?: Date;

  @Column()
  @Field(() => String, {
    description: "the serial number of the piece of gear",
    nullable: true,
  })
  serialNumber?: string;

  @Column()
  @Field(() => String, {
    description: "the serial number of the piece of gear",
    nullable: true,
  })
  modelNumber?: string;

  @Column()
  @Field(() => String, {
    description: "the manufacturer of the piece of gear",
    nullable: true,
  })
  manufacturer?: string;

  @Field(() => User)
  @JoinColumn({ name: "user_id" })
  @ManyToOne(() => User, (user) => user.gearRecords)
  user: User;

  @Field(() => [GearRecordPhoto])
  @OneToMany(() => GearRecordPhoto, (photo) => photo.gearRecord)
  photos: GearRecordPhoto[];
}
