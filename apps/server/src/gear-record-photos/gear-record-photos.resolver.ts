import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { GearRecordPhotosService } from "./gear-record-photos.service";
import { GearRecordPhoto } from "./entities/gear-record-photo.entity";
import { CreateGearRecordPhotoInput } from "./dto/create-gear-record-photo.input";
import { UpdateGearRecordPhotoInput } from "./dto/update-gear-record-photo.input";

@Resolver(() => GearRecordPhoto)
export class GearRecordPhotosResolver {
  constructor(
    private readonly gearRecordPhotosService: GearRecordPhotosService
  ) {}
  @Mutation(() => Boolean)
  async createGearRecordPhoto(
    @Args("createGearRecordPhotoInput")
    { photo, gearRecordId }: CreateGearRecordPhotoInput
  ): Promise<boolean> {
    return await this.gearRecordPhotosService.create({
      photo,
      gearRecordId,
    });
  }

  @Query(() => [GearRecordPhoto], { name: "gearRecordPhotos" })
  findAll() {
    return this.gearRecordPhotosService.findAll();
  }

  @Query(() => GearRecordPhoto, { name: "gearRecordPhoto" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.gearRecordPhotosService.findOne(id);
  }

  @Mutation(() => GearRecordPhoto)
  updateGearRecordPhoto(
    @Args("updateGearRecordPhotoInput")
    updateGearRecordPhotoInput: UpdateGearRecordPhotoInput
  ) {
    return this.gearRecordPhotosService.update(
      updateGearRecordPhotoInput.id,
      updateGearRecordPhotoInput
    );
  }

  @Mutation(() => GearRecordPhoto)
  removeGearRecordPhoto(@Args("id", { type: () => Int }) id: number) {
    return this.gearRecordPhotosService.remove(id);
  }
}
