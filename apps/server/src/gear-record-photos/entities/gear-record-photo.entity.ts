import { ObjectType, Field, ID } from "@nestjs/graphql";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GearRecord } from "../../gear-records/entities/gear-record.entity";

@ObjectType()
@Entity("gear_record_photos")
export class GearRecordPhoto {
  @PrimaryGeneratedColumn()
  @Field(() => ID, { description: "the id of the photo" })
  id: number;

  @Field(() => GearRecord, {
    description: "the gear record that this photo is related to",
  })
  @JoinColumn({ name: "gear_record_id" })
  @ManyToOne(() => GearRecord, (gearRecord) => gearRecord.photos)
  gearRecord: GearRecord;

  @Column()
  @Field(() => String, {
    description: "the filename from the image POST handler",
  })
  fileName: string;

  @Column({ default: "NOW()" })
  @Field(() => Date, { description: "the date the file was uploaded" })
  uploadedAt: Date;
}
