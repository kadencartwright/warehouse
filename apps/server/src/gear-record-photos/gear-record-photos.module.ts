import { Module } from "@nestjs/common";
import { GearRecordPhotosService } from "./gear-record-photos.service";
import { GearRecordPhotosResolver } from "./gear-record-photos.resolver";
import { gearRecordPhotosProviders } from "./gear-record-photos.providers";

@Module({
  providers: [
    GearRecordPhotosResolver,
    GearRecordPhotosService,
    ...gearRecordPhotosProviders,
  ],
})
export class GearRecordPhotosModule {}
