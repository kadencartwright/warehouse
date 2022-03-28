import { CreateGearRecordInput } from "./create-gear-record.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateGearRecordInput extends PartialType(CreateGearRecordInput) {
  @Field(() => Int)
  id: number;
}
