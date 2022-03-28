import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateGearRecordInput {
  @Field(() => String, { description: "the name of the piece of gear" })
  name: string;

  @Field(() => String, { description: "the MSRP of the piece of gear" })
  msrp: string;

  @Field(() => String, { description: "the actual cost of the piece of gear" })
  actualCost: string;

  @Field(() => Date, { description: "the date the piece of gear was acquired" })
  acquiredOn: Date;

  @Field(() => String, {
    description: "the serial number of the piece of gear",
  })
  serialNumber: string;
  @Field(() => String, {
    description: "the serial number of the piece of gear",
  })
  modelNumber: string;
  @Field(() => String, {
    description: "the manufacturer of the piece of gear",
  })
  manufacturer: string;
}
