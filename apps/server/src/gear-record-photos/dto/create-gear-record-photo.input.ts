import { InputType, Field, ID } from "@nestjs/graphql";
import { FileUpload, GraphQLUpload } from "graphql-upload";

@InputType()
export class CreateGearRecordPhotoInput {
  @Field(() => ID, {
    description: "The Gear Record to associate the photo with",
  })
  gearRecordId: number;

  @Field(() => GraphQLUpload, {
    description: "The photo  to asociate with a gear record",
  })
  photo: FileUpload;
}
