import { CreateGearRecordPhotoInput } from './create-gear-record-photo.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGearRecordPhotoInput extends PartialType(CreateGearRecordPhotoInput) {
  @Field(() => Int)
  id: number;
}
